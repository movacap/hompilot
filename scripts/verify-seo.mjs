import assert from 'node:assert/strict';
import fs from 'node:fs';
import {parseHTML} from 'linkedom';
const origin='https://hompilot.com';
const root=new URL('../dist/',import.meta.url);
const xml=fs.readFileSync(new URL('sitemap.xml',root),'utf8');
const urls=[...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);
assert.equal(urls.length,20,'Expected homepages and nine agents in both languages');
assert.equal(new Set(urls).size,20);
const titles=new Set();
for(const url of urls){
  const route=new URL(url).pathname;
  const file=route==='/'?'index.html':route.slice(1)+'/index.html';
  const {document}=parseHTML(fs.readFileSync(new URL(file,root),'utf8'));
  const lang=route.startsWith('/fr')?'fr':'en';
  assert.equal(document.documentElement.lang,lang);
  assert.equal(document.querySelectorAll('h1').length,1,url+' must have one static H1');
  assert.ok(document.querySelector('main').textContent.length>500,url+' must have meaningful static content');
  assert.equal(document.querySelectorAll('link[rel=canonical]').length,1);
  assert.equal(document.querySelector('link[rel=canonical]').getAttribute('href'),url);
  assert.equal(document.querySelector('meta[property="og:url"]').content,url);
  assert.ok(document.querySelector('meta[property="og:image"]').content.includes(`share-${lang}-`));
  assert.ok(document.title.length>20&&document.title.length<90,url+' title length');
  assert.ok(!titles.has(document.title),url+' duplicate title');titles.add(document.title);
  assert.ok(document.querySelector('meta[name=description]').content.length>70);
  assert.ok(!document.querySelector('meta[name=robots]').content.includes('noindex'));
  const graph=JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent)['@graph'];
  assert.ok(graph.some(x=>x['@type']==='WebPage'&&x.url===url));
  const faq=graph.find(x=>x['@type']==='FAQPage');
  if(faq){for(const question of faq.mainEntity){assert.ok(document.querySelector('#faq').textContent.includes(question.name));assert.ok(document.querySelector('#faq').textContent.includes(question.acceptedAnswer.text));}}
  for(const code of ['en','fr','x-default']){
    const alternate=document.querySelector(`link[hreflang="${code}"]`).getAttribute('href');assert.ok(urls.includes(alternate),url+' alternate is canonical');
  }
  for(const a of document.querySelectorAll('a[href]')){
    const href=a.getAttribute('href');
    if(!href.startsWith('/')&&!href.startsWith('#'))continue;
    const target=new URL(href,url);
    const targetFile=target.pathname==='/'?'index.html':target.pathname.slice(1)+'/index.html';
    if(target.pathname.endsWith('.html'))continue;
    assert.ok(fs.existsSync(new URL(targetFile,root)),url+' broken internal link '+href);
    if(target.hash){const {document:d}=parseHTML(fs.readFileSync(new URL(targetFile,root),'utf8'));assert.ok(d.getElementById(target.hash.slice(1)),url+' missing anchor '+href);}
  }
}
assert.ok(fs.readFileSync(new URL('robots.txt',root),'utf8').includes(origin+'/sitemap.xml'));
assert.ok(fs.readFileSync(new URL('test-maya.html',root),'utf8').includes('noindex'));
console.log('SEO verified: 20 static pages, unique titles, canonicals, language alternates, social tags, JSON-LD, FAQ parity and internal links.');
