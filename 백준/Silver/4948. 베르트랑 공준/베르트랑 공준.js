let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

function isPrime(num) {
  if(num <= 1) {
    return false;
  }
  if( num % 2 === 0) { 
    return num === 2 ? true : false;
  }
  const sqrt = parseInt(Math.sqrt(num));

  for( let divider = 3; divider <= sqrt; divider += 2) {

    if(num % divider === 0) {
      return false;
    }
    
  }
  
  return true;
}

let a;
let result = 0;
for(i=0;i<input.length-1;i++){
  a = Number(input[i])

  for(q=a+1;q<=a*2;q++){
    if(isPrime(q) === true){
      result++
    }
  }
    if(result != 0){
  console.log(result)
        }
  result = 0
}