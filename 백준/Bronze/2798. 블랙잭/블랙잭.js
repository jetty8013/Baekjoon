let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');


let num = input[0].toString().split(' ').map(Number);
let arr = input[1].toString().split(' ').map(Number);

let max = 0
for(let i = 0; i < num[0]; i++) {
  for(let j = 0; j < num[0]; j++) {
    for(let k = 0; k < num[0]; k++) {
      if(i == j || i == k || j == k) {
        continue;
      }
      const sum = arr[i] + arr[j] + arr[k]
      if(sum > max && sum <= num[1]) {
        max = sum
      }
      if(max == num[1]) {
        break;
      }
    }
  }
}
 
console.log(max)
