var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();
console.log(parseInt(input)-543);