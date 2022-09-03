let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let num1 = Number(input[0]);
let num2 = Number(input[1]);
let num3 = Number(input[2]);
let num4 = Number(input[3]);
let num5 = Number(input[4]);
let num6 = Number(input[5]);

console.log((1-num1)+' '+(1-num2)+' '+(2-num3)+' '+(2-num4)+' '+(2-num5)+' '+(8-num6));