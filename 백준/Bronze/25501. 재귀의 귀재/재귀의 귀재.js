let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

function recursion(s,l,r){
  if(l >= r) return 1 +" "+(l+1);
  else if(s[l] != s[r]) return 0+" "+(l+1);
  else return recursion(s, l+1, r-1);
}

function isPalindrome(s){
  return recursion(s, 0, s.length-1);
}

for(i=1;i<=input[0];i++){
console.log(isPalindrome(input[i]))
}