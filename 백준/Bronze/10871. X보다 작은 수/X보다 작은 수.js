let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let ss = input[0].split(' ');
let ss2 = input[1].split(' ');
let result = '';

for(i=0;i<ss[0];i++){
    if(parseInt(ss2[i]) < parseInt(ss[1])){
        result += ss2[i]+' '
    }
}
console.log(result)