/**
* 다 소문자로 바꾼다
* 나왔던 적이 있고 cacheSize제한이 넘으면 맨 앞에꺼 제거 후 push
*/

function solution(cacheSize, cities) {
    let answer = 0;
    let arr = [];
    
    cities.forEach(el => {
        el = el.toLowerCase()
        let idx = arr.indexOf(el)
        if(idx !== -1) {
            arr.delete(idx)
                answer+=1
        }
        else {
            if(cacheSize === arr.length) {
                arr.shift()
            }
                arr.push(el)
                answer+=5
        }
    })
    return answer;
}