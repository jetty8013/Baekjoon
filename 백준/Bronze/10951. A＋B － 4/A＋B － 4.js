let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let a;

for(i=0;i<input.length-1;i++){
    a = input[i].split(' ')
    console.log(parseInt(a[0])+parseInt(a[1]))
}