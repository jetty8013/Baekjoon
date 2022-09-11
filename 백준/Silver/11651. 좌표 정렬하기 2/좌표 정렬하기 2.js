let fs = require('fs');
let arr = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

arr.shift()
let result = new Array()

arr.forEach(value => {
  result.push(value.toString().split(' ').map(Number))
});

let answer = '';
result.sort((a, b) => {
  if (a[1] === b[1])
    return a[0] - b[0];
  else
    return a[1] - b[1];
}).forEach(arr => {
    answer += `${arr[0]} ${arr[1]}\n`
  });


console.log(answer);
