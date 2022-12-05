/**
*  "aya", "ye", "woo", "ma" 
* 1. 발음할수있는거 외에 다른게 있는지 확인
* 2. 연속된게 포함됐는지 확인
*/

function solution(babbling) {
    const regx1 = /(aya|ye|woo|ma)\1/ //ayaaya , yeye , woowoo , mama 처럼 중복인지 찾는 조건
    const regx2 = /^(aya|ye|woo|ma)+$/ // "aya", "ye", "woo", "ma" 이외에 다른 문자가 없는 조건
    let count = 0
    
    babbling.forEach(value => {
        if(!regx1.test(value) && regx2.test(value)) count++ // (중복)이 아니면서 (다른 문자)가 없는 조건
    })

    return count
}