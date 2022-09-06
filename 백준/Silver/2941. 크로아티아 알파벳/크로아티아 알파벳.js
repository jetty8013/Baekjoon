let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let str = input[0].toString().replace(/c=|c-|dz=|d-|lj|nj|s=|z=/g,"0").split('');

console.log(str.length)