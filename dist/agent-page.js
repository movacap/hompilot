import {header,bindHeader} from './site-header.js';
import {agentEnglish} from './agent-content-en.js';

const host=document.getElementById('shared-header');
const main=document.getElementById('main');
const footer=document.querySelector('.footer');
const description=document.querySelector('meta[name="description"]');
const french={main:main.innerHTML,footer:footer.innerHTML,title:document.title,description:description?.content};
const agentNumber=Number(document.querySelector('.agent-choice.active')?.getAttribute('href').match(/\/([1-9])$/)?.[1]||1);
let lang=localStorage.getItem('hompilot-lang')||document.documentElement.lang||'fr';
if(!['en','fr'].includes(lang))lang='fr';
const text=(selector,value)=>{const el=document.querySelector(selector);if(el)el.textContent=value;};
const label=(el,value)=>{
  // Preserve nested icons and number badges.
  const node=[...el.childNodes].find(n=>n.nodeType===3&&n.textContent.trim());
  if(node)node.textContent=value;
};
function renderContent(){
  main.innerHTML=french.main;
  footer.innerHTML=french.footer;
  document.documentElement.lang=lang;
  document.title=french.title;
  if(description)description.content=french.description;
  if(lang==='fr')return;
  const agent=agentEnglish[agentNumber-1];
  document.title='Maya Agent #'+agentNumber+' — '+agent.name+' | HomPilot';
  if(description)description.content=agent.specialty;
  text('.agent-nav>.eyebrow','THE 9 MAYA AGENTS');
  document.querySelectorAll('.agent-choice').forEach((el,i)=>label(el,agentEnglish[i].name));
  text('.back-home','← Back to home');
  text('.agent-breadcrumb>span:last-child','Maya Agent '+String(agentNumber).padStart(2,'0'));
  label(document.querySelector('.agent-hero .eyebrow'),'MAYA AGENT #'+agentNumber);
  label(document.querySelector('.agent-hero h1'),agent.name);
  text('.agent-specialty',agent.specialty);
  label(document.querySelector('.agent-hero .text-link'),'See Maya in action');
  document.querySelector('.agent-portrait img').alt='Maya — '+agent.name;
  document.querySelector('.agent-about h2').innerHTML='An expert.<br>By your side, 24/7.';
  text('.agent-about p',agent.about);
  text('.agent-about blockquote',agent.quote);
  text('.agent-features>.eyebrow','KEY FEATURES');
  document.querySelectorAll('.agent-features article').forEach((el,i)=>{
    el.querySelector('h3').textContent=agent.features[i][0];
    el.querySelector('p').textContent=agent.features[i][1];
  });
  document.querySelectorAll('.agent-stats>div').forEach((el,i)=>{
    el.querySelector('strong').textContent=agent.stats[i][0];
    el.querySelector('span').textContent=agent.stats[i][1];
  });
  document.querySelector('.agent-cta h2').innerHTML='Team up<br>with Maya.';
  text('.agent-cta p','Personalized demo — No commitment');
  label(document.querySelector('.agent-cta .button'),'Book a demo');
  const pagination=document.querySelector('.agent-pagination');
  pagination.setAttribute('aria-label','Agent navigation');
  pagination.querySelectorAll('a').forEach(el=>{
    el.textContent=Number(el.getAttribute('href').split('/').pop())<agentNumber?'← Previous':'Next →';
  });
  const footerLabels=footer.querySelectorAll('.footer-bottom>span');
  footerLabels[0].textContent='© 2026 HomPilot. All rights reserved.';
  footerLabels[1].textContent='Proudly Canadian';
}
function renderPage(){
  document.getElementById('mobile-nav')?.close();
  document.body.classList.remove('mobile-menu-open');
  renderContent();
  host.innerHTML=header(lang);
  bindHeader(next=>{
    lang=next;
    renderPage();
    host.querySelector('[data-lang="'+lang+'"]')?.focus({preventScroll:true});
  });
}
renderPage();
