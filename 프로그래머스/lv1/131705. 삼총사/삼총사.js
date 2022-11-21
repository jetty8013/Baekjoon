// 3중 for문으로 모든 조합을 만든다
// number[i] + number[j] + number[k]를 더했을때 0이 나오면 count +1 

function solution(number) {
    let count = 0;
    for(let i=0; i<number.length; i++){
        for(let j=i+1; j<number.length; j++){
            for(let k=j+1; k<number.length; k++){
                if(number[i] + number[j] + number[k] === 0){
                    count += 1;
                }
            }
        }
    }
    return count;
}