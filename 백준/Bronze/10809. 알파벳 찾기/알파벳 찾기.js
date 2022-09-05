let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('');

let arr = new Array;
let result = '';

for (let i = 97; i <= 122; i++) {
    arr.push(String.fromCharCode(i));
}
for(i=0;i<arr.length;i++){
    result += input.indexOf(arr[i])+' '
}

console.log(result);