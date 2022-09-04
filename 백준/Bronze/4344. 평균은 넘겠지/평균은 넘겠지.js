let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let k;
let average = 0;
let anwser = 0;

for(x=1;x<=input[0];x++){
k = input[x].toString().split(' ');//인풋 바꿔야함

for(i=1;i<=k[0];i++){
    average += Number(k[i])
}
average = average/k[0]
//평균넘는지 감별
for(i=1;i<=k[0];i++){
   if(k[i] > average){
       anwser += 1;
   }
}
anwser = (anwser/k[0])*100
console.log(anwser.toFixed(3)+"%")
average = 0;
anwser = 0;
}

