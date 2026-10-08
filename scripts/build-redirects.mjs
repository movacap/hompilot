import fs from 'node:fs';
import {services,servicePath} from './service-content.mjs';
const file=new URL('../vercel.json',import.meta.url);
const config=JSON.parse(fs.readFileSync(file,'utf8'));
const redirects=[
 {source:'/homepage3',destination:'/',permanent:true},
 {source:'/agents',destination:'/fr#agents',permanent:true},
 {source:'/agents/:id([1-9])',destination:'/fr/agents/:id',permanent:true}
];
for(const service of services){
 const slugs=[service.slug,...service.aliases];
 const pattern=slugs.join('|');
 // Only known service categories, one city segment: never swallow unrelated URLs.
 for(const prefix of ['', '/en', '/fr']){
  const dest=servicePath(prefix==='/fr'?'fr':'en',service.slug);
  redirects.push({source:`${prefix}/:service(${pattern})/:city([a-zA-Z][a-zA-Z0-9-]*)`,destination:dest,permanent:true});
  redirects.push({source:`${prefix}/:service(${pattern})`,destination:dest,permanent:true});
  if(prefix==='/en')redirects.push({source:`${prefix}/services/:service(${pattern})`,destination:dest,permanent:true});
  else if(service.aliases.length)redirects.push({source:`${prefix}/services/:service(${service.aliases.join('|')})`,destination:dest,permanent:true});
  redirects.push({source:`${prefix}/services/:service(${pattern})/:city([a-zA-Z][a-zA-Z0-9-]*)`,destination:dest,permanent:true});
 }
}
// Directory families: consolidate retired city and cost pages into useful indexes.
// Keep specific trade mappings ahead of the generic directory rules.
for(const prefix of ['', '/en', '/fr']){
 const localized=prefix==='/fr'?'/fr':'';
 for(const service of services){
  const pattern=[service.slug,...service.aliases].join('|');
  for(const source of [
   `${prefix}/cities/:city/:service(${pattern})`,
   `${prefix}/services/:service(${pattern})/:path+`,
   `${prefix}/cost-guides/:service(${pattern})`,
   `${prefix}/cost-guides/:service(${pattern})/:city`
  ])redirects.push({source,destination:servicePath(localized==='/fr'?'fr':'en',service.slug),permanent:true});
 }
 for(const family of ['cities','cost-guides']){
  redirects.push({source:`${prefix}/${family}/:path+`,destination:`${localized}/${family}`,permanent:true});
  if(prefix==='/en')redirects.push({source:`${prefix}/${family}`,destination:`/${family}`,permanent:true});
 }
 // Unknown retired service categories go to the guide index, while every current
 // canonical service page remains directly accessible (no catch-all homepage redirect).
 const canonical=services.map(s=>s.slug).join('|');
 const legacy=prefix==='/en'?'[^/]+':`(?!(?:${canonical})(?:/|$))[^/]+`;
 redirects.push({source:`${prefix}/services/:legacy(${legacy})/:path*`,destination:`${localized}/services`,permanent:true});
}
redirects.push({source:'/en/services',destination:'/services',permanent:true});
config.redirects=redirects;
fs.writeFileSync(file,JSON.stringify(config,null,2)+'\n');
console.log(`Generated ${redirects.length} targeted permanent redirects.`);
