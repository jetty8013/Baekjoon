// 각 자리의 숫자를 더해서 리턴
// number타입 n값을 문자로 타입변경 후 0번째 인덱스부터 마지막 인덱스까지 더해줌
// 더할시에 숫자로 한번더 타입변경

function solution(n)
{
    var answer = 0;
    n = String(n)
    for(let i=0;i<n.length;i++){
       answer+= Number(n[i])
    }
    return answer;
}