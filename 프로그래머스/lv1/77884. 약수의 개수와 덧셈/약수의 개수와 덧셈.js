// 1부터 자기 자신까지 0으로 나누어 떨어지는 수의 갯수 찾는 divisor 함수 추가로 작성

// left부터 right까지 반복문 범위지정해서 짝수 또는 홀수에 따라 연산


function solution(left, right) {
    var answer = 0;
    
    for(let i = left;i<=right;i++){
        divisor(i)%2 === 0 ? answer+=i : answer-=i
    }
    
    
    return answer;
}


function divisor(num){
    let count = 0;
    
    for(let i=1; i<=num;i++){
        if(num%i === 0) count++
    }
    return count
}