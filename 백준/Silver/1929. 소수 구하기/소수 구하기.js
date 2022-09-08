let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');


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

let a = Number(input[0])
let b = Number(input[1])


for(i=a;i<=b;i++){
    if(isPrime(i) == true){
  console.log(i)
}
}