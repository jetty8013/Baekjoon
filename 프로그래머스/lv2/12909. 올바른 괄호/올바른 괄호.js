/**
* '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다
* 1. ')'으로 시작하면 false
*/

function solution(s){
    let count = 0;
    for(let i=0;i<s.length;i++){
        s[i] === '(' ? count+=1:count-=1
        if(count < 0) return false
    } 
    if(count === 0) return true
    else return false
}