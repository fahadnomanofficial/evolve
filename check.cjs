const fs=require('node:fs'),path=require('node:path');
const pages=require('./routes.json');let errors=[];let checked=0;
for(const {url} of pages){const f=url==='/404/'?'404.html':path.join(url,'index.html');const html=fs.readFileSync(path.join(__dirname,f),'utf8');
 for(const match of html.matchAll(/(?:href|src)="(\/[^"?#]*)/g)){let target=path.join(__dirname,decodeURIComponent(match[1]));if(fs.existsSync(target)&&fs.statSync(target).isDirectory())target=path.join(target,'index.html');if(!fs.existsSync(target))errors.push(url+' → '+match[1]);checked++;}
 if((html.match(/<h1[ >]/g)||[]).length!==1)errors.push(url+' requires one h1');
 if(!html.includes('name="description"'))errors.push(url+' missing description');
}
const catalog=require('./data/catalog.json');
for(const source of catalog.requested)if(!pages.some(p=>p.url===source.path))errors.push('Missing source route '+source.path);
for(const product of catalog.products){
 if(!pages.some(p=>p.url===product.path))errors.push('Missing product '+product.id);
 for(const variant of product.variants){
  if(variant.price===null)errors.push('Missing variant price '+variant.id);
  for(const [key,value] of Object.entries(variant.attributes)){
   const attribute=product.attributes.find(a=>a.key===key);
   if(!attribute||(value&&!attribute.values.some(v=>v.value===value)))errors.push('Invalid source variant attribute '+variant.id+' '+key);
  }
  if(variant.image&&!fs.existsSync(path.join(__dirname,variant.image)))errors.push('Missing variant image '+variant.id);
 }
}
for(const category of catalog.categories)if(category.productIds.length!==category.sourceCount)errors.push('Category count differs from source '+category.name);
if(errors.length){console.error(errors.join('\n'));process.exit(1)}console.log(`PASS: ${pages.length} pages; ${checked} local asset and navigation references; ${catalog.requested.length} source URLs; complete product variants and category counts.`);
