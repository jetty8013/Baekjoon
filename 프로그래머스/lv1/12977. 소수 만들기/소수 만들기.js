/**
* 1. 3중 for문으로 3개의 수를 더했을때 소수이면 answer 배열에 push
* 2. isPrime() 함수 작성
* 3. answer 길이 return
*/
function solution(nums) {
    const answer = [];
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
    	    for(let k = j+1; k < nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k]
                isPrime(sum) ? answer.push(sum) : null;
            }
        }
    }
    return answer.length
}



/**
* Math.sqrt() 함수는 숫자의 제곱근을 반환합니다.
* isPrime 함수 작성
*  1. 2부터 입력받은수의 제곱근까지 반복문실행
*  2. 입력받은수를 for문 내부 i로 나눈 나머지의 값이 0이면 return false 
*     ( 입력받은수까지 반복문이 도달하지 못했기 때문에 소수가 아님 )
* 위 코드가 다 실행되면 소수라고 판단하여 return 
*/

function isPrime(num) {
  for(let i = 2;i <= Math.sqrt(num);i++){
    if(num%i === 0) return false
  }
  return true
}