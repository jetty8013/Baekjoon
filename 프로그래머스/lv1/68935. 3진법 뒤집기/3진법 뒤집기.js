// 숫자 문자열 3진수로 바꾸고 배열로 만들어줌
// 뒤집어서 다시 문자열로 만든후 parseInt로 한번더 3진수로 변환해줌

function solution(n) {
    let answer = n.toString(3).split("").reverse().join("");
    
    return answer = parseInt(answer,3)
}