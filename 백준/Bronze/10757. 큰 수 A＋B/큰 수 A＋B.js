let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let result = (BigInt(input[0])+ BigInt(input[1])).toString()
console.log(result)
