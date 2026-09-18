const iconPaths={arrow:'M4 12h16m-6-6 6 6-6 6',menu:'M4 6h16M4 12h16M4 18h16',close:'m6 6 12 12M6 18 18 6'};
const icon=name=>`<svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${iconPaths[name]}"/></svg>`;
export function header(lang='en',home=false){const choose=(en,fr)=>lang==='fr'?fr:en;const cta=choose('Book a demo','Réserver une démo');const section=id=>(home?'':'/')+'#'+id;const a=(label)=>`<a class="button red" href="${section('booking')}">${label}${icon('arrow')}</a>`;return `<a class="skip-link" href="#main">${choose('Skip to content','Aller au contenu')}</a><header class="site-header" lang="${lang}"><div class="container nav"><a href="/" class="logo" aria-label="HomPilot"><img src="/brand/hompilot-logo.png" width="148" height="39" alt="HomPilot"></a><nav class="desktop-nav" aria-label="${choose('Main navigation','Navigation principale')}"><a href="${section('platform')}">${choose('Platform','Plateforme')}</a><a href="${section('maya')}">Maya <span class="small-tag">AI</span></a><a href="/agents/1">${choose('The 9 Maya','Les 9 Maya')}</a><a href="${section('solutions')}">Solutions</a><a href="${section('resources')}">${choose('Resources','Ressources')}</a></nav><div class="nav-actions"><div class="languages" aria-label="Language"><button data-lang="en" aria-pressed="${lang==='en'}">EN</button><span>/</span><button data-lang="fr" aria-pressed="${lang==='fr'}">FR</button></div><a class="button dark nav-cta" href="${section('booking')}">${cta}${icon('arrow')}</a><button class="menu-button icon-button" aria-expanded="false" aria-controls="mobile-nav" aria-label="${choose('Open menu','Ouvrir le menu')}">${icon('menu')}</button></div></div></header><dialog id="mobile-nav" class="mobile-drawer" lang="${lang}" aria-labelledby="mobile-menu-title"><div class="mobile-drawer-header"><span id="mobile-menu-title">Menu</span><button class="icon-button mobile-drawer-close" aria-label="${choose('Close menu','Fermer le menu')}" autofocus>${icon('close')}</button></div><nav class="mobile-nav" aria-label="${choose('Main navigation','Navigation principale')}"><a href="${section('platform')}">${choose('Platform','Plateforme')}</a><a href="${section('maya')}">Maya</a><a href="/agents/1">${choose('The 9 Maya','Les 9 Maya')}</a><a href="${section('solutions')}">Solutions</a><a href="${section('resources')}">${choose('Resources','Ressources')}</a>${a(cta)}</nav></dialog>`;}

export function bindHeader(onLanguageChange){
document.querySelectorAll('.site-header [data-lang]').forEach(b=>b.addEventListener('click',()=>{localStorage.setItem('hompilot-lang',b.dataset.lang);onLanguageChange(b.dataset.lang);}));
const menu=document.querySelector('.menu-button');
const drawer=document.getElementById('mobile-nav');
let closeTimer;
const closeMenu=(animate=true)=>{
  if(!drawer.open)return;
  if(!animate||matchMedia('(prefers-reduced-motion: reduce)').matches){drawer.close();return;}
  if(drawer.classList.contains('is-closing'))return;
  drawer.classList.add('is-closing');
  closeTimer=setTimeout(()=>drawer.close(),240);
};
menu.addEventListener('click',()=>{
  drawer.classList.remove('is-closing');
  drawer.showModal();
  menu.setAttribute('aria-expanded','true');
  document.body.classList.add('mobile-menu-open');
});
drawer.querySelector('.mobile-drawer-close').addEventListener('click',()=>closeMenu());
drawer.addEventListener('cancel',e=>{e.preventDefault();closeMenu();});
drawer.addEventListener('click',e=>{
  const bounds=drawer.getBoundingClientRect();
  if(e.target===drawer&&(e.clientX<bounds.left||e.clientX>bounds.right||e.clientY<bounds.top||e.clientY>bounds.bottom))closeMenu();
});
drawer.addEventListener('close',()=>{
  clearTimeout(closeTimer);
  drawer.classList.remove('is-closing');
  menu.setAttribute('aria-expanded','false');
  document.body.classList.remove('mobile-menu-open');
});
drawer.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>closeMenu(false)));

}
if(typeof matchMedia==='function')matchMedia('(min-width:1051px)').addEventListener('change',e=>{if(e.matches)document.getElementById('mobile-nav')?.close();});
