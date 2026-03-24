const input = require('fs').readFileSync('/dev/stdin','utf8').trim();

const a = Number(input);

function fact(a){
if(a<=1) return 1;


return a * fact(a-1);
}

console.log(fact(a));