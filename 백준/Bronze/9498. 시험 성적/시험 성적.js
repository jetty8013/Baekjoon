let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let a = parseInt(input[0]);

if(a >= 90 && 100 >= a){
    console.log("A");
}else if(a >= 80 && 89 >= a){
    console.log("B");
}
else if(a >= 70 && 79 >= a){
    console.log("C");
}
else if(a >= 60 && 69 >= a){
    console.log("D");
}else{
    console.log("F");
}