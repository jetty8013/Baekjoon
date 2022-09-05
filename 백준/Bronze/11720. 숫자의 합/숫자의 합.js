let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let num = input[1].toString().split('');
let result = 0;
for(i=0;i<input[0];i++){
    result+=Number(num[i])
}
console.log(result)