let fs = require('fs');
let arr = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
arr.shift()

let answer = new Array;

arr.sort().sort(function compare(a, b) {
  return a.length - b.length;
}).forEach(value => {
  if(answer.indexOf(value) == -1){
    answer.push(value)
  }

  });


console.log(answer.join("\n"));