// number 타입 n 을 문자열로 바꿔준뒤 split("")을 이용해 배열로 반환후
// reverse()를 이용해 배열을 뒤집어줌
// 뒤집어준 배열을 0의 index 부터 마지막 index 까지 순회하며 number타입으로 변환하며 answer배열에 push해줌

function solution(n) {
    let answer = [];
       n = String(n).split("").reverse();
    
        for(let i=0;i<n.length;i++){
            answer.push(Number(n[i]))
            }
    return answer
}