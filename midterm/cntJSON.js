const input = require('fs').readFileSync('/dev/stdin','utf8').trim();

const obj = JSON.parse(input);

console.log(Object.keys(obj).length)