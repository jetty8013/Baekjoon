// count=0 변수 선언
// 문자열 순회하면서 .toUpperCase() .toLowerCase() 를 적용
// count1씩 증가
// 공백 만나면 count초기화

function solution(s) {
    var answer = '';
    let count = 0;
    
    
    for(let i=0;i<s.length;i++){
        if(s[i] === " "){
            answer+=" "
            count=0
            continue;
        }
        
        if(count%2 === 0){
            answer+=s[i].toUpperCase()
        }
        else{
            answer+=s[i].toLowerCase()
        }
        count++
    }
    
    return answer;
}