// num 을 2로 나눈 나머지가 0일때 짝수
// num 을 2로 나눈 나머지가 0이 아닐때 홀수 
// 조건문으로 리턴

function solution(num) {
    if(num%2 === 0){
        return "Even"
    }else if(num%2 !== 0){
        return "Odd"
    }
}