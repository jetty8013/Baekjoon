// s문자열을 모두 소문자로 바꿔준다 toLowerCase()

// 문자열의 길이만큼 반복문을 순회
// p를 만나면 변수 num에 1을 더해준다
// y를 만나면 num에 1을 빼준다
// 변수 num이 0 이면 true 아니면 false


function solution(s){
    let num = 0;
    s = s.toLowerCase()
    
    for(let i = 0; i < s.length;i++){
        if(s[i] === "p"){
            num += 1
        }else if(s[i] === "y"){
            num -= 1
        }
    }
    
    return num === 0?true:false
}