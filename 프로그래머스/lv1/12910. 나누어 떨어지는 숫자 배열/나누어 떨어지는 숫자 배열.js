// arr 배열 순회
// 요소값이 나누어 떨어지면 answer 에 push
// 나누어 떨어지는게 없으면 , 빈배열이면 [-1] 리턴
// 빈배열 아니면 정렬해서 리턴

function solution(arr, divisor) {
    var answer = [];
    
    arr.forEach(value =>{
        if(value%divisor === 0){
            answer.push(value)
        }
    })
    
    if(answer.length === 0){return [-1]}
    
    answer.sort((a,b) =>{
        return a - b
    })
    
    
    return answer;
}