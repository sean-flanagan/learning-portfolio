const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });
fs.cpSync(path.join(root, 'src'), dist, { recursive: true });
fs.cpSync(path.join(root, 'assets'), path.join(dist, 'assets'), { recursive: true });
fs.writeFileSync(path.join(dist, '.nojekyll'), '');
console.log(`Built static site to ${dist}`);
