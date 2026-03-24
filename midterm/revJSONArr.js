const input = require('fs').readFileSync('/dev/stdin','utf8').trim();

const arr = JSON.parse(input);

console.log(JSON.stringify(arr.reverse()));

