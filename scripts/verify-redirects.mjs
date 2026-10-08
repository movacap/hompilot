import assert from 'node:assert/strict';
import fs from 'node:fs';
import {match,compile} from 'path-to-regexp';
import {services,servicePath} from './service-content.mjs';
const config=JSON.parse(fs.readFileSync(new URL('../vercel.json',import.meta.url),'utf8'));
assert.equal(config.trailingSlash,false,'Normalize trailing slashes before legacy redirects');
const rules=config.redirects.map(rule=>({...rule,match:match(rule.source),target:compile(rule.destination)}));
const redirect=url=>{for(const rule of rules){const hit=rule.match(url);if(hit)return rule.target(hit.params);}return null;};
const fixtures={
 '/cities/laval':'/cities',
 '/cities/laval/':'/cities',
 '/fr/cities/laval':'/fr/cities',
 '/en/cities/laval':'/cities',
 '/cities/montreal/roof-repair':'/services/roofer',
 '/cost-guides/roof-replacement':'/services/roofer',
 '/cost-guides/hvac-installation/montreal':'/services/hvac',
 '/cost-guides/other-project':'/cost-guides',
 '/fr/cost-guides/other-project':'/fr/cost-guides',
 '/en/cost-guides':'/cost-guides',
 '/en/cities':'/cities',
 '/services/deck-or-porch':'/services',
 '/services/deck-or-porch/laval':'/services',
 '/fr/services/deck-or-porch':'/fr/services',
 '/services/roofer/montreal/details':'/services/roofer',
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
let cases=Object.keys(fixtures).length;
for(const prefix of ['', '/en','/fr']){
 const lang=prefix==='/fr'?'fr':'en';
 for(const city of ['laval','montreal','quebec','blainville','longueuil','saint-jerome','toronto','ottawa','vancouver','calgary','edmonton']){
  assert.equal(redirect(`${prefix}/cities/${city}`),`${prefix==='/fr'?'/fr':''}/cities`);cases++;
  for(const service of services)for(const slug of [service.slug,...service.aliases]){
   for(const route of [`${prefix}/${slug}/${city}`,`${prefix}/services/${slug}/${city}`,`${prefix}/cities/${city}/${slug}`,`${prefix}/cost-guides/${slug}/${city}`]){
    assert.equal(redirect(route),servicePath(lang,service.slug),route);cases++;
   }
  }
 }
}
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
console.log(`Redirects verified: ${rules.length} permanent rules, ${cases} legacy URL regressions, no canonical redirects or missing targets.`);
