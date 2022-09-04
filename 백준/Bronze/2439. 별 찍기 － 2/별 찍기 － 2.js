let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
let result = '';
let space = Number(input)-1;

for(i=1;i<=input;i++){
    for(a=0;a<space;a++){//공백생성
        result += ' '
    }
    for(a=0;a<i;a++){//별생성
        result += '*'
    }
    result += '\n'
    space-=1
}
console.log(result)