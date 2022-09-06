let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input2 = input[0].toUpperCase()
let str = input2.toString().split('');
let arr = new Array()
let arr2 = new Array()
let myMap = new Map()
let saveIndex = 0

for(i=0;i<str.length;i++){
    if(myMap.has(str[i]) == true){
     myMap.set(str[i],myMap.get(str[i])+1)
    }else{
    myMap.set(str[i],1)
    }
}
for(let item of myMap.values()) arr.push(item) //map에서 벨류만 가져와서 배열에 push
for(let item of myMap.keys()) arr2.push(item) //map에서 벨류만 가져와서 배열에 push
let maxNum = Math.max(...arr)//배열에서 최대값
if(arr.indexOf(maxNum) == arr.lastIndexOf(maxNum)){
    console.log(arr2[arr.indexOf(maxNum)])
}
else if(arr.indexOf(maxNum) !== arr.lastIndexOf(maxNum)){
    console.log("?")
}