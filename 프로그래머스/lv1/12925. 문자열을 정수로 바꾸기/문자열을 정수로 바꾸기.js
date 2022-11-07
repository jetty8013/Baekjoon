// eval(문자열) 이용 문자열 내용을 그대로 계산해줌  해킹될수있으니 지양하세요
// Number(s) 로도 가능

//다른방법 : 문자열 첫번째가 "-" 면 slice이용하여 첫번째 글자 제외후 *-1을 곱해줌
// 문자열 첫번째가 "+" 면 slice이용하여 첫번째 글자 제외
// 위 조건이 아니면 그냥 넘버로 반환

function solution(s) {
    return eval(s);
}

// function solution(s) {
//     if(s[0] === "-"){
//         return Number(s.slice(1,s.length))*-1
//     }else if(s[0] === "+"){
//         return Number(s.slice(1,s.length))
//     }else{
//         return Number(s)
//     }
// }