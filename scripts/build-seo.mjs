import fs from 'node:fs';
import path from 'node:path';
import {parseHTML} from 'linkedom';
import {renderHome} from '../dist/app.js';
import {header} from '../dist/site-header.js';
import {renderAgent} from './render-agent.mjs';
import {original} from '../dist/content.js';
const origin='https://hompilot.com';
const output=new URL('../dist/',import.meta.url);
const read=p=>fs.readFileSync(new URL('../'+p,import.meta.url),'utf8');
const write=(p,s)=>{const file=new URL(p,output);fs.mkdirSync(path.dirname(file.pathname),{recursive:true});fs.writeFileSync(file,s.replace(/[ \t]+$/gm,''));};
const homePath=lang=>lang==='fr'?'/fr':'/';
const pages=[];
function metadata(document,{lang,url,en,fr,title,description,agent}){
  document.documentElement.lang=lang;
  document.title=title;
  document.head.querySelectorAll('meta[name="description"],meta[property^="og:"],meta[name^="twitter:"],link[rel="canonical"],link[rel="alternate"],script[type="application/ld+json"],meta[name="robots"]').forEach(e=>e.remove());
  const add=(tag,attrs,text)=>{const el=document.createElement(tag);el.setAttribute('data-seo','');for(const [k,v] of Object.entries(attrs))el.setAttribute(k,v);if(text)el.textContent=text;document.head.appendChild(el);};
  add('meta',{name:'description',content:description});
  add('meta',{name:'robots',content:'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'});
  add('link',{rel:'canonical',href:origin+url});
  for(const [code,route] of [['en',en],['fr',fr],['x-default',en]])add('link',{rel:'alternate',hreflang:code,href:origin+route});
  const image=origin+`/brand/hompilot-share-${lang}-20261003.png`;
  for(const [property,content] of Object.entries({'og:type':'website','og:site_name':'HomPilot','og:title':title,'og:description':description,'og:url':origin+url,'og:locale':lang==='fr'?'fr_CA':'en_CA','og:locale:alternate':lang==='fr'?'en_CA':'fr_CA','og:image':image,'og:image:secure_url':image,'og:image:type':'image/png','og:image:width':'2048','og:image:height':lang==='fr'?'1120':'1118','og:image:alt':lang==='fr'?'HomPilot et Maya — Plus de jobs. Moins d’admin.':'HomPilot and Maya — More jobs. Less admin.'}))add('meta',{property,content});
  for(const [name,content] of Object.entries({'twitter:card':'summary_large_image','twitter:title':title,'twitter:description':description,'twitter:image':image,'twitter:image:alt':title}))add('meta',{name,content});
  const org={'@type':'Organization','@id':origin+'/#organization',name:'HomPilot',url:origin+'/',logo:origin+'/brand/hompilot-logo.png',telephone:'+1-438-533-5800'};
  const website={'@type':'WebSite','@id':origin+'/#website',name:'HomPilot',url:origin+'/',inLanguage:['en','fr'],publisher:{'@id':org['@id']}};
  const app={'@type':'SoftwareApplication','@id':origin+'/#software',name:'HomPilot',url:origin+'/',applicationCategory:'BusinessApplication',operatingSystem:'Web',description:lang==='fr'?'Plateforme de gestion pour les entreprises de services résidentiels avec Maya, une équipe d’agents IA pour les appels, soumissions, rendez-vous et suivis.':'Home service business management platform with Maya AI agents for calls, quotes, scheduling and follow-ups.',publisher:{'@id':org['@id']}};
  const page={'@type':'WebPage','@id':origin+url+'#webpage',url:origin+url,name:title,description,inLanguage:lang,isPartOf:{'@id':website['@id']},about:{'@id':app['@id']}};
  const graph=[org,website,app,page];
  if(agent){
    const crumbs={'@type':'BreadcrumbList','@id':origin+url+'#breadcrumb',itemListElement:[{'@type':'ListItem',position:1,name:'HomPilot',item:origin+homePath(lang)},{'@type':'ListItem',position:2,name:agent,item:origin+url}]};
    page.breadcrumb={'@id':crumbs['@id']};graph.push(crumbs);
  }else{
    graph.push({'@type':'FAQPage','@id':origin+url+'#faq',inLanguage:lang,mainEntity:original[lang].faq.items.map(x=>({'@type':'Question',name:x.question,acceptedAnswer:{'@type':'Answer',text:x.answer}}))});
  }
  add('script',{type:'application/ld+json'},JSON.stringify({'@context':'https://schema.org','@graph':graph}).replaceAll('<','\\u003c'));
  pages.push({url,en,fr,title,lang});
}
function localizeLinks(document,lang,id){
  for(const a of document.querySelectorAll('a[href]')){
    const href=a.getAttribute('href');
    if(/^\/(?:en\/|fr\/)?agents(?:\/|$)/.test(href)){
      const match=href.match(/agents\/([1-9])/);a.setAttribute('href',match?`/${lang}/agents/${match[1]}`:homePath(lang)+'#agents');
    }else if(href==='/'||href.startsWith('/#'))a.setAttribute('href',homePath(lang)+href.slice(1));
    if(a.hasAttribute('data-lang')){const target=a.getAttribute('data-lang');a.setAttribute('href',id?`/${target}/agents/${id}`:homePath(target));}
  }
}
for(const lang of ['en','fr']){
  const {document}=parseHTML(read('src/home.html'));
  document.getElementById('app').innerHTML=renderHome(lang);
  document.querySelector('noscript')?.remove();
  localizeLinks(document,lang);
  metadata(document,{lang,url:homePath(lang),en:'/',fr:'/fr',title:lang==='fr'?'HomPilot | Logiciel de gestion et agents IA pour entrepreneurs':'HomPilot | Home Service Software & AI Receptionist',description:lang==='fr'?'Gérez vos appels, soumissions, rendez-vous et suivis avec HomPilot et les 9 agents IA Maya. Pour les entrepreneurs en services résidentiels.':'Manage calls, quotes, scheduling and follow-ups with HomPilot and 9 Maya AI agents. Built for home service contractors. Explore the platform and book a demo.'});
  write(lang==='en'?'index.html':'fr/index.html','<!doctype html>\n'+document.documentElement.outerHTML);
  for(let id=1;id<=9;id++){
    const {document}=parseHTML(read(`src/agents/${id}.html`));
    renderAgent(document,lang,id);
    document.getElementById('shared-header').innerHTML=header(lang);
    localizeLinks(document,lang,id);
    const name=document.querySelector('h1').textContent.replace(/\.$/,'');
    const specialty=document.querySelector('.agent-specialty').textContent.replace(/\.$/,'');
    const title=lang==='fr'?`Maya : ${name} IA | HomPilot`:`Maya AI ${name} | HomPilot`;
    const description=lang==='fr'?`${specialty}. Découvrez Maya, votre ${name.toLowerCase()} IA pour les entreprises de services résidentiels.`:`${specialty}. Meet Maya, your AI ${name.toLowerCase()} for home service businesses.`;
    metadata(document,{lang,url:`/${lang}/agents/${id}`,en:`/en/agents/${id}`,fr:`/fr/agents/${id}`,title,description,agent:name});
    write(`${lang}/agents/${id}/index.html`,'<!doctype html>\n'+document.documentElement.outerHTML);
  }
}
const escape=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
write('sitemap.xml','<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'+pages.map(p=>`  <url><loc>${origin+p.url}</loc>${[['en',p.en],['fr',p.fr],['x-default',p.en]].map(([lang,url])=>`<xhtml:link rel="alternate" hreflang="${lang}" href="${escape(origin+url)}"/>`).join('')}</url>`).join('\n')+'\n</urlset>\n');
write('robots.txt',`User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);
// Human-readable product index for tools that choose to consume llms.txt. Standard crawlable HTML remains the source of truth.
write('llms.txt',`# HomPilot\n\n> Home service business software with Maya, a team of nine AI agents. Available in English and French.\n\nHomPilot brings together inbound calls, quotes, scheduling, dispatch, billing, payments, sales, bookkeeping, marketing and the HomPassport customer record. Refer to the linked product pages for details.\n\n## Product pages\n${pages.filter(p=>p.lang==='en').map(p=>`- [${p.title}](${origin+p.url})`).join('\n')}\n\n## Pages en français\n${pages.filter(p=>p.lang==='fr').map(p=>`- [${p.title}](${origin+p.url})`).join('\n')}\n\n## Contact\n- [Book a demo](${origin}/#booking)\n- Phone: +1-438-533-5800\n- [Sitemap](${origin}/sitemap.xml)\n`);
// Keep aliases useful on a basic static server; Vercel redirects consolidate them in production.
for(const [file,source] of [['en/index.html','index.html'],['homepage3/index.html','index.html'],['agents/index.html','fr/agents/1/index.html'],...Array.from({length:9},(_,i)=>[`agents/${i+1}/index.html`,`fr/agents/${i+1}/index.html`])])write(file,fs.readFileSync(new URL(source,output),'utf8'));
console.log(`Generated ${pages.length} bilingual pages, sitemap.xml, robots.txt and llms.txt.`);
