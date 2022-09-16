let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let num = input.shift().split(' ').map(Number)
input = input.toString().split(' ').map(Number)

let answer = 0
let s = [input[0]]
let c = new Array(num[1]).fill(0)

for(i=1;i<num[0];i++){
   s[i] = s[i-1]+input[i]
}

for(i=0;i<num[0];i++){
   if(s[i]%num[1] == 0){
      answer++
   }
   c[s[i]%num[1]]++
}

for(i=0;i<num[1];i++){
   answer+= c[i] *(c[i]-1)/2
}

console.log(answer)

