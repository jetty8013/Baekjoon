let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let num = input.shift().split(" ").map(Number);
let list = input.slice(0,num[0])
let last = input.slice(num[0])
let set = new Set(list)

let cnt = 0;
last.forEach(value =>{
  if(set.has(value)){
    cnt++
  }
})
console.log(cnt)