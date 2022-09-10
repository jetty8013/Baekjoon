let fs = require('fs');
let str = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);
let arr = new Array();

for(i=1;i<str.length-1;i++){
    arr.push(str[i])
}

arr.sort(function compare(a, b) {
  if(a > b) return 1;
  if(a < b) return -1;
  return 0;
});

for(i=0;i<arr.length;i++){
    console.log(arr[i])
}
