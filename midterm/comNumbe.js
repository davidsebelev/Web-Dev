const input = require('fs').readFileSync('/dev/stdin','utf8').trim().split('\n');

const a = input[0].trim().split(/\s+/).map(Number);
const b = input[1].trim().split(/\s+/).map(Number);

let filt =  a.filter(x => b.includes(x));

console.log(filt.join(' '));

