let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input2 = fs.readFileSync('/dev/stdin').toString().split('\n');


let HH = parseInt(input[0]);
let MM = parseInt(input[1]);
let sum = parseInt(input2[1]);

if((MM+sum)/60 >= 1){
    HH = HH+((MM+sum)/60)
    if(HH < 24){
    console.log(Math.floor(HH)+' '+(MM+sum)%60)
    }else if(HH >= 24){
        HH = HH-24
        console.log(Math.floor(HH)+' '+(MM+sum)%60)
    }
}else if(((MM+sum)/60) < 1){
    console.log(HH+' '+(MM+sum))
}