let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let num = input.map((i) => Number(i));

let x = Math.max(...num)
let z = input.indexOf(x.toString())
console.log(x)
console.log(Number(z)+1)
