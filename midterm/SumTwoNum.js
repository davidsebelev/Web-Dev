const input = require('fs').readFileSync('/dev/stdin','utf8').trim();

const parts = input.split(/\s+/);

const f = Number(parts[0]);
const s = Number(parts[1]);

console.log(f + s);