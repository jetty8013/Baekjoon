/**
* 내림차순으로 정렬
* 최대 2명 태울수 있음
* 가장 무거운사람 가장 가벼운사람 합이 limit 안넘으면 둘다 탑승
* 조건 안맞으면 무거운사람 먼저 탑승
*/
function solution(people, limit) {
    let answer = 0,
        lastIdx = people.length - 1;
    people.sort((a,b) => b - a)
    
    for (let i = 0; i <= lastIdx; i++) {
        if (people[i] + people[lastIdx] <= limit) lastIdx -= 1;
        answer += 1;
     }
    return answer;
}