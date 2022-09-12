let fs = require('fs');
let arr = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let anwser = new Map()
arr.shift()
arr.forEach((value) => {
  let a = value.toString().split(" ");
  if(anwser.get(a[0]) == undefined){
  anwser.set(a[0],a[1])
  }
  else{
  anwser.set(a[0],anwser.get(a[0]) + " " + a[1])}
})
let mapsort = [...anwser]
mapsort.sort((a, b) => a[0] - b[0]);

let str = '';

function text(a,b){
  let k = b.toString().split(" ")
  for(i=0;i<k.length;i++){
  str+= a+" "+k[i]+"\n"
  }
}

mapsort.forEach(value =>{
  text(value[0],value[1])  
})
console.log(str)
