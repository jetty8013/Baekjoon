let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let arr = new Array();

for(i=0;i<input.length-1;i++){
if(arr.indexOf(Number(input[i])%42) == -1){
arr.push(Number(input[i])%42)
}
}
console.log(arr.length)