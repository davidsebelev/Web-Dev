const input = require('fs').readFileSync('/dev/stdin','utf8').trim();

const str = input;

str.toLowerCase();

let vowel = 'aeiou';

let cnt = 0;
for(let ch of str){
    if(vowel.includes(ch)){
        cnt++;
    }
}

console.log(cnt);