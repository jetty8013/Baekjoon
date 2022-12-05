/**
*  "aya", "ye", "woo", "ma" 
* 1. 발음할수있는거 외에 다른게 있는지 확인
* 2. 연속된게 포함됐는지 확인
* 
*/

function solution(babbling) {
    const regx1 = /(aya|ye|woo|ma)\1/
    const regx2 = /^(aya|ye|woo|ma)+$/
    let count = 0
    
    babbling.forEach(value => {
        if(!regx1.exec(value) && regx2.exec(value)) count++
    })

    return count
}