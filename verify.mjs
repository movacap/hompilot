import fs from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
const root=new URL('./dist/',import.meta.url);
const errors=[];
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);}
const files=walk(root.pathname);
for(const file of files){
  if(file.endsWith('.js')){const result=spawnSync(process.execPath,['--check',file],{encoding:'utf8'});if(result.status!==0)errors.push(result.stderr);}
  if(file.endsWith('.html')||file.endsWith('.css')){
    const text=fs.readFileSync(file,'utf8');
    for(const match of text.matchAll(/(?:src|href|poster)="(\/[^"#?]*)|url\(['"]?(\/[^)'"?#]+)/g)){
      const p=path.join(root.pathname,match[1]||match[2]);
      if(!fs.existsSync(p))errors.push(`Missing local asset or route: ${p}`);
    }
  }
}
for(const route of ['index.html','agents/index.html','homepage3/index.html',...Array.from({length:9},(_,i)=>`agents/${i+1}/index.html`)])if(!fs.existsSync(new URL(route,root)))errors.push(`Missing route: ${route}`);
if(errors.length){console.error(errors.join('\n'));process.exit(1);}
console.log(`Build verified: ${files.length} files, 12 page routes, valid JavaScript and local references.`);
