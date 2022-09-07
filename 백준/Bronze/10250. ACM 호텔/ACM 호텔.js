let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let result;
for(i=1;i<=input[0];i++){
    result = input[i].toString().split(' ');
    let a = result[2]%result[0]
    if(a == 0){
      a = result[0]
    }
    let b = Math.ceil(result[2]/result[0])
    if(b<10){
    console.log(String(a)+"0"+String(b))
    }
    else{
    console.log(String(a)+String(b))
    }
}
