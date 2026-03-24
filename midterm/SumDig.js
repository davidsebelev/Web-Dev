const input = require('fs').readFileSync('/dev/stdin','utf8').trim();

const str = input;

let sum = 0;

for(let i = 0 ; i < str.length;i++){
sum+=Number(str[i])
}

console.log(sum);