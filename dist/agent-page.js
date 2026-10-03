import {bindHeader} from './site-header.js';
import {bindAgentPicker} from './agent-picker.js';
function bindPage(){bindHeader();bindAgentPicker(document.documentElement.lang);}
let navigation=0;
async function navigateAgent(url,{push=true}={}){
  const target=new URL(url,location.origin);
  if(!/^\/(en|fr)\/agents\/[1-9]\/?$/.test(target.pathname))return;
  const request=++navigation;
  try{
    const response=await fetch(target.pathname);
    if(!response.ok)throw new Error('Navigation failed');
    const doc=new DOMParser().parseFromString(await response.text(),'text/html');
    if(!doc.getElementById('main'))throw new Error('Missing page');
    if(request!==navigation)return;
    document.getElementById('mobile-nav')?.close();
    document.body.classList.remove('mobile-menu-open');
    for(const selector of ['#main','#shared-header','.footer'])document.querySelector(selector).replaceWith(doc.querySelector(selector));
    document.documentElement.lang=doc.documentElement.lang;
    document.title=doc.title;
    const selector='meta[name="description"], [data-seo]';
    document.head.querySelectorAll(selector).forEach(el=>el.remove());
    doc.head.querySelectorAll(selector).forEach(el=>document.head.append(el));
    if(push)history.pushState(null,'',target.pathname+target.hash);
    bindPage();
    window.scrollTo({top:0,left:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  }catch{if(request===navigation)location.href=target.href;}
}
document.addEventListener('click',event=>{
  const link=event.target.closest('a[href]');
  if(!link||event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||link.target||link.hasAttribute('download'))return;
  const target=new URL(link.href,location.origin);
  if(target.origin!==location.origin||!/^\/(en|fr)\/agents\/[1-9]\/?$/.test(target.pathname))return;
  event.preventDefault();navigateAgent(target.href);
});
window.addEventListener('popstate',()=>navigateAgent(location.href,{push:false}));
bindPage();
