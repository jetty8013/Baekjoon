let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let num = input.shift().toString().split(" ").map(Number)

let setA = new Set(input.slice(0,num[0]))
let setB = new Set(input.slice(num[0]))
let arr = new Array()
  setB.forEach(value =>{
    if(setA.has(value)) arr.push(value)
  })
arr.sort()

console.log(arr.length+"\n"+arr.join("\n"))

