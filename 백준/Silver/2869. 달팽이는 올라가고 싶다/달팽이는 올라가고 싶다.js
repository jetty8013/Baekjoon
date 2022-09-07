let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let a = input[0]
let b = input[1]
let c = input[2]

console.log(Math.ceil((c-b)/(a-b)))