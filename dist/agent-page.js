import {header,bindHeader} from './site-header.js';
const host=document.getElementById('shared-header');
let lang=localStorage.getItem('hompilot-lang')||document.documentElement.lang||'fr';
if(!['en','fr'].includes(lang))lang='fr';
function renderHeader(){
  document.getElementById('mobile-nav')?.close();
  document.body.classList.remove('mobile-menu-open');
  host.innerHTML=header(lang);
  bindHeader(next=>{lang=next;renderHeader();});
}
renderHeader();
