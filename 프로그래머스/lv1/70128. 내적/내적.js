// 배열 순회하면서 
// a 인덱스* b 인덱스 곱해서 모두 더해주자


function solution(a, b) {
    var answer = 0;
    a.forEach((value,index) =>{
        answer+= a[index]*b[index]
    })
    
    
    return answer;
}