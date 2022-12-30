/**
* 다행히 직진..
* 순간이동 : (현재까지 온 거리) x 2 에 해당하는 위치로 순간이동
* 점프 : 앞으로 K 칸을 점프하면 K 만큼의 건전지 사용량 소모
* 역으로 연산
*/
function solution(n) {
    let ans = 0;//배터리 사용량

    while(true) {
        if(n === 0) return ans // 이동할 거리가 없으니 return
        if(n%2 === 1) ans++ // 홀수이면 배터리 사용
        n = Math.floor(n/2) // 순간이동
    }
}