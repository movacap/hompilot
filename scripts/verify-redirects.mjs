import assert from 'node:assert/strict';
import fs from 'node:fs';
import {match,compile} from 'path-to-regexp';
const config=JSON.parse(fs.readFileSync(new URL('../vercel.json',import.meta.url),'utf8'));
const rules=config.redirects.map(rule=>({...rule,match:match(rule.source),target:compile(rule.destination)}));
const redirect=url=>{for(const rule of rules){const hit=rule.match(url);if(hit)return rule.target(hit.params);}return null;};
const fixtures={
 '/roof-repair/montreal':'/services/roofer',
 '/roof-repair/calgary':'/services/roofer',
 '/roofer/edmonton':'/services/roofer',
 '/electrician/montreal':'/services/electrician',
 '/fr/roof-repair/montreal':'/fr/services/roofer',
 '/en/services/roof-repair':'/services/roofer',
 '/services/plumber/toronto':'/services/plumber',
 '/roof-repair/montreal/':'/services/roofer',
 '/agents/1':'/fr/agents/1',
 '/agents/2':'/fr/agents/2',
 '/agents/7':'/fr/agents/7'
};
for(const [source,dest] of Object.entries(fixtures))assert.equal(redirect(source),dest,source);
const sitemap=fs.readFileSync(new URL('../dist/sitemap.xml',import.meta.url),'utf8');
for(const [,url] of sitemap.matchAll(/<loc>(.*?)<\/loc>/g))assert.equal(redirect(new URL(url).pathname),null,'Canonical pages must not redirect: '+url);
for(const path of ['/unknown/montreal','/agents/999','/fr/agents/1','/roof-repair/montreal/unrelated'])assert.equal(redirect(path),null,'Do not mask real missing pages: '+path);
for(const rule of rules){
 assert.equal(rule.permanent,true);
 if(rule.destination.includes(':'))continue;
 const dest=rule.destination.split('#')[0];
 assert.equal(redirect(dest),null,'Redirect chain or loop: '+rule.source);
 assert.ok(fs.existsSync(new URL('../dist'+(dest==='/'?'':dest)+'/index.html',import.meta.url)),'Missing redirect destination: '+dest);
}
console.log(`Redirects verified: ${rules.length} permanent rules, indexed URL regressions, no canonical redirects or missing targets.`);
