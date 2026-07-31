const fs = require('fs');
const path = 'public/assets/css/main.css';
const text = fs.readFileSync(path, 'utf8');
const root = {};
const varRegex = /--([a-z0-9-]+):\s*([^;]+);/g;
let m;
const rootBlock = text.match(/:root\s*\{([\s\S]*?)\}/);
if (rootBlock) {
  let block = rootBlock[1];
  while ((m = varRegex.exec(block))) {
    root[m[1]] = m[2].trim();
  }
}
function parseColor(token) {
  token = token.trim();
  if (token.startsWith('var(')) {
    const name = token.match(/var\(--([^)]+)\)/)[1];
    if (!root[name]) throw new Error('Unknown var ' + name);
    return parseColor(root[name]);
  }
  if (token === 'transparent') return {r:0,g:0,b:0,a:0};
  if (token === 'white') return {r:255,g:255,b:255,a:1};
  if (token === 'black') return {r:0,g:0,b:0,a:1};
  if (token.startsWith('#')) {
    let hex = token.slice(1);
    if (hex.length === 3) hex = hex.split('').map(ch=>ch+ch).join('');
    return {r:parseInt(hex.slice(0,2),16),g:parseInt(hex.slice(2,4),16),b:parseInt(hex.slice(4,6),16),a:1};
  }
  throw new Error('Unsupported color ' + token);
}
function formatColor(c) {
  if (c.a === undefined || c.a === 1) return `rgb(${c.r}, ${c.g}, ${c.b})`;
  return `rgba(${c.r}, ${c.g}, ${c.b}, ${Math.round(c.a*1000)/1000})`;
}
function mix(c1,w1,c2,w2) {
  const total= w1+w2;
  const alpha1 = c1.a * w1;
  const alpha2 = c2.a * w2;
  const outAlpha = (alpha1 + alpha2) / total;
  if (outAlpha === 0) return {r:0,g:0,b:0,a:0};
  const r = Math.round((c1.r * c1.a * w1 + c2.r * c2.a * w2)/ (outAlpha * total));
  const g = Math.round((c1.g * c1.a * w1 + c2.g * c2.a * w2)/ (outAlpha * total));
  const b = Math.round((c1.b * c1.a * w1 + c2.b * c2.a * w2)/ (outAlpha * total));
  return {r,g,b,a: outAlpha};
}
function parseStop(token) {
  const parts = token.trim().split(/\s+/);
  const color = parseColor(parts[0]);
  let weight = 100;
  if (parts.length > 1) {
    const w = parseFloat(parts[1]);
    weight = isNaN(w) ? 100 : w;
  }
  return {color, weight};
}
const cmRegex = /color-mix\(in srgb,([^,]+),([^\)]+)\)/g;
let result = text;
let count = 0;
while ((m = cmRegex.exec(text))) {
  const stop1 = parseStop(m[1]);
  const stop2 = parseStop(m[2]);
  const out = mix(stop1.color, stop1.weight, stop2.color, stop2.weight);
  const replacement = formatColor(out);
  result = result.replace(m[0], replacement);
  count++;
}
fs.writeFileSync('public/assets/css/main.fallback.css', result, 'utf8');
console.log('Processed', count, 'color-mix replacements, wrote public/assets/css/main.fallback.css');
