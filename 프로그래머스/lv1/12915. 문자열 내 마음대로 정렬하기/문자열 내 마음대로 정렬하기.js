/** 
* 모든 문자는 소문자
* sort로 하나하나 비교 
* a[n] a문자열의 n 번째 요소와
* b[n] b문자열의 n 번째 요소 비교
* 조건문으로 a[n] < b[n] 이 성립하면 return -1
* return -1 a 가 b보다 앞으로 감
* return 1  b 가 a보다 앞으로 감
* return 0 현재 유지
*/

/**
* 추가 
* 인덱스에 위치한 문자가 서로 같을시 한번더 비교
*/


function solution(strings, n) {
    strings.sort((a,b) => {
        if(a[n] < b[n]) return -1
        if(a[n] === b[n]){
            if( a < b ) return -1
        }
    })
    return strings
}
