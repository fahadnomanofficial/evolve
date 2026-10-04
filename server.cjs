const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const mime = { '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.json':'application/json', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.png':'image/png', '.svg':'image/svg+xml', '.ttf':'font/ttf', '.woff2':'font/woff2', '.xml':'application/xml', '.txt':'text/plain' };
http.createServer((req,res)=>{
  let pathname;
  try { pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname); } catch {res.writeHead(400).end(); return;}
  if(pathname.includes('..')||pathname.includes('\\')){res.writeHead(403).end();return;}
  let file=path.join(root,pathname);
  if(fs.existsSync(file)&&fs.statSync(file).isDirectory())file=path.join(file,'index.html');
  if(!fs.existsSync(file)||!mime[path.extname(file)]){res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'}).end(fs.readFileSync(path.join(root,'404.html')));return;}
  res.writeHead(200,{'Content-Type':mime[path.extname(file)],'X-Content-Type-Options':'nosniff','Cache-Control':pathname.startsWith('/assets/')?'public, max-age=86400':'no-cache'});
  fs.createReadStream(file).pipe(res);
}).listen(Number(process.env.PORT)||4173,'127.0.0.1',()=>console.log('Evolve preview: http://localhost:'+(process.env.PORT||4173)));
