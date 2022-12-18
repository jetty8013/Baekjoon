/**
*   "연속된 자연수"...?
*   자기 자신 포함
*
*/

function solution(n) {
    var answer = 0;    
    let num = 1;
    while(num <= n){
        let count = 0;
        for(let i=num;i<=n;i++){
            count+=i
            if(count === n){ //15와 같으면
                answer++
                break
            }
            if(count > n) break//15보다 크면
        }
        num++
    }
    return answer;
}