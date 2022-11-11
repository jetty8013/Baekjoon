function solution(n) {
    var answer = '';
    
    const water_melon = "수박"
    
    answer = water_melon.repeat(Math.round(n/2)-1)
    
    if(n%2 === 0){
        answer+="수박"
    }else if(n%2 === 1){
        answer+="수"
    }
    
    return answer;
}