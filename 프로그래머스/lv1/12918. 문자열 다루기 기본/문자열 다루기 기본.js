// 정규식으로 숫자 삭제했는데 빈문자열 아니면 false

//
// function solution(s) {
//     s = s.replace(/[0-9]g/,"")
//     return s === ""?true : false;
// }


//Number 로 바꿨을때 NaN 이면 false

// 테스트케이스 11번 해결안되서 힌트봄
// 문자열에서 e를 제외해야함 ..

function solution(s) {
    if((s.length === 4 || s.length === 6) && s.includes("e") === false){
        return !isNaN(Number(s))
    }
    
    return false
}