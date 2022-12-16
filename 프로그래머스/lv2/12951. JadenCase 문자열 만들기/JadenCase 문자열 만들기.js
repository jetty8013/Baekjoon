/**
* split으로 공백기준으로 나눠준다
* 첫번째 글짜만 대문자로 바꾸고 다시 합쳐주기
*/
function solution(s) {
    var answer = ""
    const arr = s.split("")
    
    arr.forEach((value,index) =>{
        if(index === 0) answer+=value.toUpperCase()
        else if(arr[index-1] === " ") answer+=value.toUpperCase()
        else answer+=value.toLowerCase()
    })
    
    return answer
}