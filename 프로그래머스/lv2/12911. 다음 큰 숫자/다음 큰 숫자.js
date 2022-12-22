/**
* 조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
* 조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
* 조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.
*
* 조건1 = n보다 큰 자연수
* 조건2 = 2진수로 변환 -> 1의 갯수 저장
* 조건3 = 1씩 증가하면서 1개의 갯수가 동일한 수 찾기
*/

function solution(n) {
    let one = check(n);
    let index = n+1;
    
    while(true){
        if(check(index) === one) return index
        index++
    }
}


function check(n) {
    return n.toString(2).replaceAll('0','').length
}