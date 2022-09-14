let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n,m] = input.shift().split(" ")
let arr = input.slice(0,n)
let myMap = new Map(arr.map((v,i)=> [v,i+1]))
let test = input.slice(n)
let answer = new Array()


test.forEach(value=>{
   if(isNaN(value)) answer.push(myMap.get(value))
   else answer.push(arr[value-1])
})

console.log(answer.join('\n'))
