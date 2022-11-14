// 한번씩만 사용 ?
// 오름차순으로 정렬
// 작은거부터 뽑아서 누적
// 제일큰거 > budget - 누적시킨금액 이면 넘어감
// 제일큰거 < budget - 누적시킨금액 이면 되돌림 

function solution(d, budget) {
    let count = 0;
    let money = 0;
    
    d.sort((a,b) =>a - b)
    d.forEach(value =>{
      money += value
      count++
        
      if((budget-money) < 0){
        money -= value
        count-=1
      }
        
    })
    
    return count;
}