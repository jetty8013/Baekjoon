let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number)

let arr = new Array()
let x = input[0]
let y = input[1]
let w = input[2]
let h = input[3]


if(w/2 >= x){
   arr.push(x)
}else if(w/2 < x){
   arr.push(w-x)
}

if(h/2 >= y){
   arr.push(y)
}else if(h/2 < y){
   arr.push(h-y)
}

console.log(Math.min(...arr))
