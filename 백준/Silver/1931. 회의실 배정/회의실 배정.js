let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift()
let answer = 0
let time = 0;
let arr = new Array()


input.forEach(value =>{
   arr.push(value.toString().split(" ").map(Number))
})

arr.sort((a,b) => {
   if (a[1] === b[1]) {
      return a[0] - b[0]
    } else {
      return a[1] - b[1]
    }
})


arr.forEach(value =>{
   if(value[0] >= time){
      time = value[1]
      answer+=1
   }
})


console.log(answer)
