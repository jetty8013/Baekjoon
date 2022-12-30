/**
* A번 참가자와 B번 참가자는 서로 붙게 되기 전까지 항상 이긴다고 가정합니다.
* 무조건 이기니까 2로 나눠서 반올림하면 다음 번호
* 둘이 만나면 라운드 반환
*/
function solution(n,a,b) {
    let round = 0;
    while(true) {
        if(a === b) return round
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        round++
    }
    
}