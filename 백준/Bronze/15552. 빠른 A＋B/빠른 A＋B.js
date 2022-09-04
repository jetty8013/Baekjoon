let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let test;
let result = '';

for(i=1;i<=input[0];i++){
    test = input[i].split(' ');
    result += (parseInt(test[0])+parseInt(test[1])) + '\n';
}

console.log(result);