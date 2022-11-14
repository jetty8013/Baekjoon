//1부터 count까지 반복문 돌면서 price*i 만큼 answer 에 누적
// 돈이 넉넉~ 하면 return 0
// 아니면 return answer - money 

function solution(price, money, count) {
    let answer = 0;
    
    for(let i=1;i<=count;i++){
        answer+=price*i
    }
    
    if(answer <= money){
        return 0
    }

    return answer-money;
}