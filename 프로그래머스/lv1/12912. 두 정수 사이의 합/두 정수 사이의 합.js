// 배열에 넣고 정렬
// 두 수의 이용해 반복문 횟수 설정 
// a 부터 b까지 
// answer 에 누적합 연산 후 리턴

function solution(a, b) {
    var answer = 0;
    const arr = [a,b]
    arr.sort((a,b) =>{
        return a - b
    })
    
    for(let i=arr[0];i<=arr[1];i++){
        answer+=i
    }
    return answer;
}