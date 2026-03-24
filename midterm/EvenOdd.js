const input = require('fs').readFileSync('/dev/stdin','utf8').trim();

const a = Number(input)

if(a%2==0){
console.log("Even")
}else{
console.log("Odd")
}