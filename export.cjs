// Export only public website files. Source, documentation and local tooling stay private to the repository.
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const output = path.resolve(root, 'dist');
if (path.dirname(output) !== root || path.basename(output) !== 'dist') throw new Error('Unexpected output directory');
if (fs.existsSync(output) && fs.lstatSync(output).isSymbolicLink()) throw new Error('Output must not be a symbolic link');
fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });
const routes = require('./routes.json');
for (const { url } of routes) {
  const relative = url === '/404/' ? '404.html' : path.join(url.slice(1), 'index.html');
  const destination = path.join(output, relative);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(path.join(root, relative), destination);
}
for (const file of ['styles.css', 'app.js', 'favicon.svg', 'robots.txt', 'sitemap.xml']) fs.copyFileSync(path.join(root, file), path.join(output, file));
fs.cpSync(path.join(root, 'assets'), path.join(output, 'assets'), { recursive: true });
console.log(`Exported ${routes.length} pages and public assets to dist/.`);
