let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let man = input[0].toString().split(' ').map(Number);
let str = input[1].toString().split(' ').map(Number);


const result  = str.sort(function compare(a, b) {
  return b - a;
});

console.log(str[man[1]-1])