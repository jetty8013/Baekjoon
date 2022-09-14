let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
input.shift()
let numA = input.shift().toString().split(" ").map(Number)
input.shift()
let numB = input.shift().toString().split(" ").map(Number)
let myMap = new Map();

numA.forEach(value=>{
  if(myMap.has(value) == false){
    myMap.set(value,1)
  }else{
    myMap.set(value,myMap.get(value)+1)
  }
})
let str = ''
numB.forEach(value =>{
  if(myMap.has(value) == false){
    str+= 0 + " "
  }else{
    str+= myMap.get(value) + " "
  }
})


console.log(str)