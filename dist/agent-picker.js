export function bindAgentPicker(lang){
  const nav=document.querySelector('.agent-nav');
  const choices=[...nav.querySelectorAll('.agent-choice')];
  const active=nav.querySelector('.agent-choice.active');
  const title=lang==='fr'?'Choisir une Maya':'Choose a Maya';
  const trigger=document.createElement('button');
  trigger.type='button';
  trigger.className='agent-picker-trigger';
  trigger.setAttribute('aria-haspopup','dialog');
  trigger.setAttribute('aria-controls','agent-picker');
  trigger.setAttribute('aria-expanded','false');
  const caption=document.createElement('small');
  caption.textContent=title;
  const current=document.createElement('span');
  current.textContent=active.querySelector('span').textContent+' · '+[...active.childNodes].filter(n=>n.nodeType===3).map(n=>n.textContent).join('').trim();
  const chevron=document.createElement('span');
  chevron.className='agent-picker-chevron';
  chevron.textContent='⌄';
  chevron.setAttribute('aria-hidden','true');
  trigger.append(caption,current,chevron);
  const sheet=document.createElement('dialog');
  sheet.id='agent-picker';
  sheet.className='agent-picker-sheet';
  sheet.setAttribute('aria-labelledby','agent-picker-title');
  const heading=document.createElement('div');
  heading.className='agent-picker-heading';
  const h=document.createElement('h2');
  h.id='agent-picker-title';
  h.textContent=title;
  const close=document.createElement('button');
  close.type='button';
  close.textContent='×';
  close.setAttribute('aria-label',lang==='fr'?'Fermer':'Close');
  heading.append(h,close);
  const list=document.createElement('nav');
  list.setAttribute('aria-label',title);
  choices.forEach((choice,i)=>{
    const link=choice.cloneNode(true);
    link.className='agent-picker-option';
    const name=[...choice.childNodes].filter(n=>n.nodeType===3).map(n=>n.textContent).join('').trim();
    const label=document.createElement('span');
    label.textContent=String(i+1).padStart(2,'0')+' · '+name;
    const portrait=document.createElement('img');
    portrait.src='/brand/agents/maya-'+(i+1)+'.webp';
    portrait.alt='';
    portrait.width=44;
    portrait.height=54;
    portrait.loading='lazy';
    link.replaceChildren(portrait,label);
    if(choice===active){
      link.setAttribute('aria-current','page');
      const check=document.createElement('span');
      check.textContent='✓';
      check.setAttribute('aria-hidden','true');
      link.append(check);
    }
    link.addEventListener('click',()=>sheet.close());
    list.append(link);
  });
  sheet.append(heading,list);
  nav.before(trigger,sheet);
  trigger.addEventListener('click',()=>{
    sheet.showModal();
    trigger.setAttribute('aria-expanded','true');
    document.body.classList.add('agent-picker-open');
    list.querySelector('[aria-current]')?.focus({preventScroll:true});
    list.querySelector('[aria-current]')?.scrollIntoView({block:'nearest'});
  });
  close.addEventListener('click',()=>sheet.close());
  sheet.addEventListener('click',event=>{
    if(event.target!==sheet)return;
    const r=sheet.getBoundingClientRect();
    if(event.clientY<r.top||event.clientY>r.bottom||event.clientX<r.left||event.clientX>r.right)sheet.close();
  });
  sheet.addEventListener('close',()=>{
    document.body.classList.remove('agent-picker-open');
    trigger.setAttribute('aria-expanded','false');
    trigger.focus({preventScroll:true});
  });
}
window.addEventListener('resize',()=>{
  if(window.innerWidth>850)document.getElementById('agent-picker')?.close();
});
