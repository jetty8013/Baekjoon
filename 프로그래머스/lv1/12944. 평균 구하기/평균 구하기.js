// arr의 길이만큼 순회
// answer에 arr의 길이만큼 순회하며 더해줌
// return할때 answer/arr의길이 연산으로 평균 구함

function solution(arr) {
    var answer = 0;
    arr.forEach(v => {
    answer+=v
    });
    
    return answer/arr.length
}