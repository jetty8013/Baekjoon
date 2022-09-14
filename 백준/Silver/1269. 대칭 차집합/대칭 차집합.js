let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
input.shift()

let setA1 = new Set(input[0].toString().split(" ").map(Number));
let setA2 = new Set(setA1);
let setB1 = new Set(input[1].toString().split(" ").map(Number));
let setB2 = new Set(setB1);



setA1.forEach(value => {
  setB1.delete(value)
})

setB2.forEach(value => {
  setA2.delete(value)
})

console.log(setA2.size+setB1.size)
