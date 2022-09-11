let fs = require('fs');
let arr = fs.readFileSync('/dev/stdin').toString().trim().split('').map(Number);
arr.sort(function(a, b)  {
  return b - a;
});
console.log(arr.join(""))