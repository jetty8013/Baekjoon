// Math.sqrt(n) 으로 제곱근 구해줌
// 양의 정수로 바꿔준 값과 동일하면 +1 더해서 제곱 리턴 parseInt
// 아니면 -1



function solution(n) {
    if(Math.sqrt(n) === parseInt(Math.sqrt(n))){
        return (Math.sqrt(n)+1)**2
    }else{
        return -1
    }
}