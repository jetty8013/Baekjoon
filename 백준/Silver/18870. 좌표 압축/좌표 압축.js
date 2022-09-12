let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
let arr = input.toString().trim().split(' ').map(Number);
const set = new Set(arr);
const uniqueArr = [...set].sort((a,b) => a - b);

let dic = {};
uniqueArr.forEach((e, index) => {dic[e] = index;})
//console.log(dic);
let answer = '';
for(let i=0; i < arr.length; i++) {
    answer += dic[arr[i]] + ' ';
}

console.log(answer);