let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let a;

for(num=1;num<=input[0];num++){
    a = input[num].split(' ');
    a = parseInt(a[0])+parseInt(a[1])
    console.log(`Case #${num}: ${a}`)
}