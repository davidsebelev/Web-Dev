const input = require('fs').readFileSync('/dev/stdin','utf8').trim().split('\n');

const word = input[0];
const number = Number(input[1]);

let str = "";
for(let i = 0 ; i < number;i++){str+=word;}

console.log(str);