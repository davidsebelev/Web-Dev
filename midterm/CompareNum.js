const input = require('fs').readFileSync('/dev/stdin','utf8').trim();

const[a,b] = input.split(/\s+/).map(Number);

if(a > b){console.log("First is greater");}
else if(a < b){console.log("Second is greater");}
else{console.log("Equal");}