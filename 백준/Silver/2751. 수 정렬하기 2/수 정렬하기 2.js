let fs = require('fs');
let str = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
str.shift()
const result  = str.sort(function compare(a, b) {
  return a - b;
});

console.log(result.join('\n'))