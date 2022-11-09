// 매개변수 n 을
// 0부터 1씩 증가하는 반복문으로 순회하며
// 0

function solution(n) {
    for(let i=0;i<=n;i++){
        if(n%i == 1){
           return i
        }
    }
}