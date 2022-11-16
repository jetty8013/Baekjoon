// 알파벳을 유니코드로 변환하여 n 만큼 더한후 변환해준다
// 예외처리 : z를 넘어갔을경우 a로 변환하여 나머지 연산
// 예외처리2 : 공백은 변환하지않고 바로 문자열 반환

//문자열을 유니코드로 - charCodeAt()
//유니코드를 문자열로 - fromCharCode()
// 소문자 a-z 97-122
// 대문자 A-Z 65-90
function solution(s, n) {
    const arr = []
    let num = 0
    s.split("").forEach(value =>{
        //공백이면 공백 넣어줌
        if(value === " "){
            arr.push(" ")
        }
        // 대문자일때
        else if(value.charCodeAt(0) >= 65 && value.charCodeAt(0) <= 90){
            // Z넘어갔을때 처리
            if(value.charCodeAt(0)+n > 90){
                num = value.charCodeAt(0)+n-26
            }else{
                num = value.charCodeAt(0)+n
            }
            //변환 후 배열에 넣어줌
            arr.push(String.fromCharCode(num))
        }//소문자일때
        else if(value.charCodeAt(0) >= 97 && value.charCodeAt(0) <= 122){
            // z넘어갔을때 처리
            if(value.charCodeAt(0)+n > 122){
                num = value.charCodeAt(0)+n-26
            }else{
              num = value.charCodeAt(0)+n  
            }
             //변환 후 배열에 넣어줌
             arr.push(String.fromCharCode(num))
        }
    })
    return arr.join("")
}