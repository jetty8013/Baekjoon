/**
*   A는 오름차순
*   B는 내림차순 으로 정렬후 곱하고 더하기
*/
function solution(A,B){
    var answer = 0;
    const sortA = A.sort((a,b) => a - b)
    const sortB = B.sort((a,b) => b - a)
    
    
    for(let i=0;i<sortA.length;i++){
        answer+= sortA[i]*sortB[i]
    }
    
    return answer;
}