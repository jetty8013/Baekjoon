let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let OX;
let score = 0;
let result = 0;

for(a=1;a<=input[0];a++){
OX = input[a].toString().split('');
for(i=0;i<OX.length;i++){
    if(OX[i] == "O"){
        score += 1
    }else if(OX[i] == "X"){
    score = 0
    }
    result += score
}
console.log(result)
score = 0;
result = 0;
}