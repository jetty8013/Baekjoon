/**
* isPrime 함수 작성
* 1. 2부터 n 까지 반복문 실행
* 2. isPrime 함수의 값이 true 면 answer 1씩 증가
* 3. 반복문 종료 후 return answer
*/
function solution(n) {
    let answer = 0;
    let i = 2;
    while(i <= n){
        isPrime(i)? answer++ : null
        i++
    }
    return answer;
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