// function solution(s) {
//     var answer = '';
//     let count = s
    
//     count=Math.round(count.length/2)
    
//     if(s.length%2 != 0){
//     s = s.substr(count-1, 1);
//     }
//     else if(s.length%2 == 0){
//         s = s.substr(count-1, 2);
//     }
    
    
//     return answer = s;
// }
// 예전 코드 
// ,,,, ? 왜저래 .. 

//substr 바뀜 ;;

function solution(s) {
    let divide_str = 0
    
    if(s.length%2 === 0){
        
    divide_str = s.length/2
        
    return s[divide_str-1]+s[divide_str]
    }
    
    else{
        
    divide_str = Math.round(s.length/2)
    
    return s[divide_str-1]
    }
}