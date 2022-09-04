let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let k = input[1].toString().split(' ')
let num = k.map((i) => Number(i));
let x = Math.max(...num);
let result = 0;

for(i=0;i<input[0];i++){
    result += (num[i]/x)*100
}
console.log(result/input[0])