let fs = require('fs');
let input = parseInt(fs.readFileSync('/dev/stdin'));
let sum = 0;

for(i=1;i<=input;i++){
    sum = sum+i;
}
console.log(sum);