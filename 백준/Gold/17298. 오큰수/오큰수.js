let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let size = input.shift()
let num = input.toString().trim().split(' ').map(Number)

let arr = new Array(Number(size)).fill(-1)
let stack = new Array()

for(i=0; i<size;i++){
   while (stack.length > 0 && num[stack[stack.length - 1]] < num[i]) {
      arr[stack.pop()] = num[i];
  }
  stack.push(i);
}

console.log(arr.join(" "))
