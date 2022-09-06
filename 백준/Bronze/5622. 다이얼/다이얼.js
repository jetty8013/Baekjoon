let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('');

let arr = new Array;
let myMap = new Map();
let count = 1;
let num = 2;

for (let i = 65; i <= 90; i++) {
    arr.push(String.fromCharCode(i));
}

for(i=0;i<arr.length;i++){
        myMap.set(arr[i],num)
        count++
        if(count > 3 && (num !== 7 && num !== 9)){
            count = 1
            num++
        }else if(count > 4 && num == 7){
            count = 1
            num++
        }
        else if(count > 4 && num == 9){
            count = 1
            num++
        }
}

let anwser = 0;

for(i=0;i<input.length;i++){
    anwser+=myMap.get(input[i])+1
}

console.log(anwser)