let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let num = 0;
let text;
function d(n){
text = n.toString().split('');
if(text.length == 3){
  let cal1 = Number(text[0]-text[1])
  let cal2 = Number(text[1]-text[2])
  if(cal1 == cal2){
    num+=1
  }
}
else if(text.length == 2){
  num+=1
}
else if(text.length == 1){
  num+=1
}
}

for(i=1;i<=input[0];i++){
d(i)
}
console.log(num)