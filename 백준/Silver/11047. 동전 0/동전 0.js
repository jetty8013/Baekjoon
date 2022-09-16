let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let total = input.shift().toString().split(' ').map(Number)
let coin = 0
input.sort((a,b) => b - a)

input.forEach(value =>{
   if(Math.floor(total[1]/value) !== 0 && total[1] !== 0){
      let num = Math.floor(total[1]/value)
      coin += num
      total[1] += Number((num*value)*-1)
   }
})

console.log(coin)
