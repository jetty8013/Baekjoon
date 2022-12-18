/**
* 0과 1만 있으니까 0을 모두 제거한 1의 문자열을 만들고 길이 비교해서 0의 갯수 측정
* 제거한 0의 갯수 저장
* 10진수 -> 2진수 toString(2)
*/
function solution(s) {
    let countZero = 0;
    let count = 0;
    
    while(s.length !== 1){
        count+= s.length
        s = s.replaceAll('0',"")
        count-= s.length
        s = s.length.toString(2)
        countZero++
    }
    
    return [countZero,count];
}