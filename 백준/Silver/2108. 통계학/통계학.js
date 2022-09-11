let fs = require('fs');
let arr = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

arr.shift()

let sMap = new Map();
let xx = new Array();
let maxNum,mapV,mapK;

function maxChar(str){//최빈값 찾기
  for(i=0;i<str.length;i++){
    if(sMap.get(str[i]) == undefined){
      sMap.set(str[i],1)
    }else{
      sMap.set(str[i],sMap.get(str[i])+1)
    }
  }
  maxNum = Math.max(...sMap.values())
  mapK = [...sMap.keys()]
  mapV = [...sMap.values()]

  for(i=0;i<mapV.length;i++){
    if(mapV[i] == maxNum){
      xx.push(mapK[i])
    }
  }
  xx.sort(function(a, b)  {
    return a - b;
  });
  if(xx.length > 1){
    return xx[1]
  }
  else{
    return xx[0]
  }
}

let sum = 0;

arr.forEach((value) => {
  sum+= value
});
let yy = [...arr]

yy.sort(function(a, b)  {
  return a - b;
});

let num1 = Math.round(sum/arr.length)
if(num1 == -0){
  console.log(0)
}
else{
  console.log(num1)
}
console.log(yy[Math.floor(yy.length/2)])
console.log(maxChar(arr))
console.log(Math.max(...arr)-Math.min(...arr))