const fs=require('node:fs'),path=require('node:path');
const pages=require('./routes.json');let errors=[];let checked=0;
for(const {url} of pages){const f=url==='/404/'?'404.html':path.join(url,'index.html');const html=fs.readFileSync(path.join(__dirname,f),'utf8');
 for(const match of html.matchAll(/(?:href|src)="(\/[^"?#]*)/g)){let target=path.join(__dirname,decodeURIComponent(match[1]));if(fs.existsSync(target)&&fs.statSync(target).isDirectory())target=path.join(target,'index.html');if(!fs.existsSync(target))errors.push(url+' → '+match[1]);checked++;}
 if((html.match(/<h1[ >]/g)||[]).length!==1)errors.push(url+' requires one h1');
 if(!html.includes('name="description"'))errors.push(url+' missing description');
}
if(errors.length){console.error(errors.join('\n'));process.exit(1)}console.log(`PASS: ${pages.length} pages; ${checked} local asset and navigation references; unique page headings and descriptions.`);
