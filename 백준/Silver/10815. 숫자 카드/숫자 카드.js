let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let myMap = new Map();
input[1].toString().trim().split(' ').map(Number).forEach(value => {
    myMap.set(value,value)
})
let arr = input[3].toString().trim().split(' ').map(Number);

let str = '';
arr.forEach(value => {
    if(myMap.get(value) == undefined){
        str+= 0 + " "
    }else{
        str+= 1 + " "
    }
})


console.log(str)
