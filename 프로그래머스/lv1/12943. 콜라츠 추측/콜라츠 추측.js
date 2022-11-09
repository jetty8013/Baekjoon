// 콜라츠 독일사람
// 주어진 조건에 따라 반복문순회
// 반복문 횟수당 answer +1 
// 조건성립시 리턴


function solution(num) {
    var answer = 0;
    
    while(true){
    if(num === 1){return answer}
    else if(answer > 500){return -1}
    
    if(num%2 === 0){
        num = num/2
    }else if(num%2 === 1){
        num = (num*3)+1
    }
        answer++
    }
}