import http from 'node:http';
import { createReadStream, statSync, existsSync } from 'node:fs';
import { join, extname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('./dist/', import.meta.url));
const types = {'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.mp4':'video/mp4','.ttf':'font/ttf','.woff2':'font/woff2'};
const port = Number(process.env.PORT || 4173);
http.createServer((req,res) => {
  let pathname;
  try { pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname); } catch {res.writeHead(400).end();return;}
  let path = resolve(root, '.' + pathname);
  if (path !== resolve(root) && !path.startsWith(resolve(root)+'/')) {res.writeHead(403).end();return;}
  if (existsSync(path) && statSync(path).isDirectory()) path = join(path,'index.html');
  if(!existsSync(path)){res.writeHead(404,{'Content-Type':'text/plain'}).end('Not found');return;}
  const size=statSync(path).size;
  const headers={'Content-Type':types[extname(path)]||'application/octet-stream','Accept-Ranges':'bytes','Cache-Control':'no-cache'};
  if (req.headers.range) {
    const match=/^bytes=(\d+)-(\d*)$/.exec(req.headers.range);
    if(!match){res.writeHead(416,{'Content-Range':`bytes */${size}`}).end();return;}
    const start=Number(match[1]),end=Math.min(match[2]?Number(match[2]):size-1,size-1);
    if(start>=size||end<start){res.writeHead(416,{'Content-Range':`bytes */${size}`}).end();return;}
    res.writeHead(206,{...headers,'Content-Range':`bytes ${start}-${end}/${size}`,'Content-Length':end-start+1});
    if(req.method==='HEAD')res.end();else createReadStream(path,{start,end}).pipe(res);
  }else{
    res.writeHead(200,{...headers,'Content-Length':size});
    if(req.method==='HEAD')res.end();else createReadStream(path).pipe(res);
  }
}).listen(port,'127.0.0.1',()=>console.log(`HomPilot is ready at http://localhost:${port}`));
