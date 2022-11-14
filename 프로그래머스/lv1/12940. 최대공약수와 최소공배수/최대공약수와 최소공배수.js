// 유클리드 호제법


function solution(n, m) {
    var answer = [];
    answer.push(gcd(n,m))
    answer.push((n*m)/answer[0])
    return answer;
}

function gcd(a,b){
    while(b > 0){
        let tmp = b
        b = a%b
        a = tmp
    }
    return a
}