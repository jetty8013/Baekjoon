// x 한글자씩 더해준 후 answer에 넣어줌
// x%answer === 0 이면 하샤드

function solution(x) {
    var answer = 0;
    x = String(x)
    
    for(let i=0;i<x.length;i++){
        answer += Number(x[i])
    }
    
    x = Number(x)
    return x%answer === 0;
}