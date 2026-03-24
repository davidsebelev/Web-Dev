const input = require('fs').readFileSync('/dev/stdin','utf8').trim();

const arr = input.split(/\s+/).map(Number);

let sum = 0;
for(let i = 0 ; i < arr.length;i++){
sum+=arr[i];
}

console.log(sum);