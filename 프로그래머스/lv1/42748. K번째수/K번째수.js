/**
* 1. commands 배열 map으로 순회
* 2. slice로 범위만큼 배열 복사
* 3. sort() 로 정렬
* 4. commands 3번째 index에 맞는 요소 answer 배열에 담아주기
*/

function solution(array, commands) {
    const answer = commands.map(el => {
       const parseArr = array.slice(el[0]-1,el[1]).sort((a,b)=> a - b);
        return parseArr[el[2]-1]
    })
    return answer;
}