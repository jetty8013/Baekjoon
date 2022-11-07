// for 문으로 순회하며 i 변수를 1개씩 더해가며 1부터 n까지 반복문 순회
// for 문 안에 조건문으로 약수인지 아닌지 판별
// 조건: n을 i로 나눴을때의 나머지가 0일때
// 위 조건이 참이면 answer에 더하고
// 반복문 종료 후 answer 리턴

function solution(n) {
    var answer = 0;
    
    for(let i=1; i<=n;i++){
        if(n%i === 0){
            answer+=i
        }
    }
    return answer;
}