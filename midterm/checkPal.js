const input = require('fs').readFileSync('/dev/stdin','utf8').trim();

const str = input;

let newStr = "";

for(let i = str.length - 1 ; i >= 0 ; i--){
newStr+=str[i];
}

if(newStr == str){
console.log("YES");
}else{console.log("NO");}