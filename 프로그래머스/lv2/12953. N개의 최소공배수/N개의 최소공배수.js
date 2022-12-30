/**
* 유클리드 호제법
* a를 b로 나눈 나머지 r을 구하고, b를 r로 나눈 나머지 r'을 구함
* 나머지가 0이 될 때까지 나눈 수가 최대 공약수의 수
*/

function solution(arr) {
    let answer = 1;
    const gcd = (a,b) => { // 최대공약수 구하기
        return (a === 0) ? b : gcd(b%a, a);
    }
    const lcm = (a,b) => { // 최소공배수 구하기
        return (a * b) / gcd(a, b);
    }
    
    for(let i = 0; i < arr.length; i++) {
        answer = lcm(answer, arr[i]);
    }
    return answer;
}