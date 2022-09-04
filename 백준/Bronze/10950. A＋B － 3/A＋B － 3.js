let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let T = parseInt(input[0]);
let C;
for(i=1;i<T+1;i++){
    C = input[i].toString().split(' ')
    console.log(parseInt(C[0])+parseInt(C[1]))
}