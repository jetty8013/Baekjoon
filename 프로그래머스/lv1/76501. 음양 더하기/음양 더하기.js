// 반복문 순회하면서
// signs의 요소의 값이 true 면 양수 false면 음수
// absolutes의 요소에 양수 음수 적용하여 result값에 누적 

function solution(absolutes, signs) {
    var answer = 0;
    
    signs.forEach((value,index) =>{
        if(value === true){
           answer+= absolutes[index]
        }else{
            answer-= absolutes[index]
        }
    })
    
    return answer;
}