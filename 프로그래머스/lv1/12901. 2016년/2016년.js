/**
* new Date() + toString() 으로 날짜 생성
* split으로 맞는 요일 반환
*/


function solution(a, b) {
    const date = new Date(2016,a-1,b).toString()
    return date.split(' ')[0].toUpperCase()
}