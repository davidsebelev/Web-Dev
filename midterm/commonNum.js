//filter делает проверку подходит ли массив под такое условие

const input = require('fs').readFileSync('/dev/stdin','utf8').trim().split('\n')

const arr1 = input[0].trim().split(' ').map(Number);
const arr2 = input[1].trim().split(' ').map(Number);

let common = arr1.filter(x => arr2.includes(x));

console.log(common.join(' '))