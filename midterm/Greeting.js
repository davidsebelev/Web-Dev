const input = require('fs').readFileSync('/dev/stdin','utf8').trim().split('\n');

const name = input[0].trim().split(/\s+/);
const age = Number(input[1]);

console.log("Hello, " + name + "! You are " + age +" years old.");