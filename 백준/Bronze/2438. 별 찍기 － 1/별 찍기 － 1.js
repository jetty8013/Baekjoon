let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
let result = '';

for(i=1;i<=input;i++){
    for(a=0;a<i;a++){//별생성
        result += '*'
    }
    result += '\n'
}
console.log(result)