let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let num1 = parseInt(input[0]);
let num2 = input[1].split('');

console.log((num1*parseInt(num2[2])));
console.log((num1*parseInt(num2[1])));
console.log((num1*parseInt(num2[0])));
console.log((num1*parseInt(input[1])));