let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let arr = new Array();
let start = Number(input[0])
let end = Number(input[1])

const isPrime = (n) => {
  if (n == 1) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return arr.push(n);
}


for(i=start;i<=end;i++){
  isPrime(i)
}
if(arr == ""){
  console.log(-1)
}else{
console.log(arr.reduce((a, b) => a + b, 0))
console.log(Math.min(...arr))   
}
