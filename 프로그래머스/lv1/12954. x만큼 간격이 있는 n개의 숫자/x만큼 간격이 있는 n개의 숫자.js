// x와 n입력
// answer에 x push
// 1부터 n까지 반복문 돌면서 이전값에 x더해서 push

function solution(x, n) {
    var answer = [];
    answer.push(x)
    
    for(let i=1;i<n;i++){
        answer.push(answer[i-1]+x)
    }
    
    return answer;
}