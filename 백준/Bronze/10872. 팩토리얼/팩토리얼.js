let fs = require('fs');
let input = fs.readFileSync('/dev/stdin');
let result = 1;

function factorial(n){

  if(n <= 1){
    return result
  }
  
  result= result*n
  return factorial(n-1)
}

console.log(factorial(input))

