// n 을 문자열로 변경
// 문자열을 ""기준으로 split
// map으로 순회하면서 숫자로 배열에 넣어줌 
// sort로 정렬
// join("")으로 합쳐줌
// number 타입으로 변경후 리턴

function solution(n) {
    var answer = n.toString().split('').map(Number).sort((a,b)=>{ return b - a }).join("");
    return Number(answer);
}