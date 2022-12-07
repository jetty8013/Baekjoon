/**
* 1. 1~number 까지 약수구하기
* 2. limit를 넘으면 power로 대체
* 3. 다 더한값 출력
*/

function solution(number, limit, power) {
    const numberArr = new Array(number).fill(0).map((el,index) => getDivisors(index+1))

    const answer = numberArr.reduce((acc,cur) => {
        if(cur > limit) return acc + power
        return acc + cur
    });
    return answer;
}


function getDivisors(num){
  let divisors = 0;
  for(let i = 1 ; i <= Math.sqrt(num) ; i++){
      if(num % i === 0) {
          divisors++;
          if(num / i != i) divisors++;
      }
  }
  return divisors;
}