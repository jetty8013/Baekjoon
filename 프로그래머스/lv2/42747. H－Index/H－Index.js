/**
* 무슨 쌉소린가
* 발표한 논문의 수 = citations.length
* 논문별 인용 횟수 = citations[i]
* 공식적으로 f 가 각 출판물의 인용 수에 해당하는 함수 인 경우 다음과 같이 h -index를 계산합니다. 먼저 f 의 값을 가장 큰 값에서 가장 낮은 값으로 정렬합니다. 그런 다음 f 가 위치보다 크거나 같은 마지막 위치를 찾습니다

(citations[i] >= i+1 && citations[i] >= (citations.length - i))
*/
function solution(citations) {
    citations.sort((a,b) => b - a);
    return citations.filter((el,index) => {
        if(citations[index] >= index + 1 && citations[index] >= (citations.length - index)) return el
    }).length
}

// [3, 0, 6, 1, 5]

// [6, 5, 3, 1, 0]