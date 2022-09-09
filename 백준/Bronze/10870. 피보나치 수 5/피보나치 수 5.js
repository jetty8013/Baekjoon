let fs = require('fs');
let input = fs.readFileSync('/dev/stdin');

let arr = new Array();
let num = 1;
arr[0] = 0
arr[1] = 1

while(true){
  arr.push(arr[num-1]+arr[num])
  if(num>=20){
    break
  }
  num++
}

console.log(arr[Number(input)])