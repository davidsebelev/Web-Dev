const input = require('fs').readFileSync('/dev/stdin','utf8').trim();

const arr = input.split(/\s+/).map(Number);

const number = arr.pop();

let cnt = 0;
for(let i = 0 ; i < arr.length; i++){
if(arr[i] == number)cnt++;
}
console.log(cnt);