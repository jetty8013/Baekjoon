let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let reverse1 = input[0].toString().split('');
let reverse2 = input[1].toString().split('');

reverse1 = reverse1.reverse()
reverse2 = reverse2.reverse()
let left = reverse1[0]+reverse1[1]+reverse1[2]
let right = reverse2[0]+reverse2[1]+reverse2[2]

if(left > right){
    console.log(left)
}else if(right > left){
    console.log(right)
}
