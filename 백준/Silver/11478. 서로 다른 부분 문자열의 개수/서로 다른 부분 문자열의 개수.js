let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
let str = new Set();

for (let i = 0; i < input.length; i++) {
  for (let j = i; j < input.length; j++) {
      str.add(input.substring(i, j + 1))
  }
}

console.log(str.size)
