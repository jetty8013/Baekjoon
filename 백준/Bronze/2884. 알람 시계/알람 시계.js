let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let HH = parseInt(input[0]);
let MM = parseInt(input[1])-45;

if(MM < 0){
    HH = HH-1
    if(HH < 0){
        HH = 23
    }
    console.log(HH+' '+(MM+60))
}else if(MM >= 0){
    console.log(HH+' '+MM)
}