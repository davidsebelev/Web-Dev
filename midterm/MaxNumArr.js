const input = require('fs').readFileSync('/dev/stdin','utf8').trim();

const arr = input.split('').map(Number);

let maxNum = -10000;
for(let i = 0 ; i < arr.length;i++){
if(arr[i] > maxNum){
maxNum = arr[i];
}
}
console.log(maxNum);