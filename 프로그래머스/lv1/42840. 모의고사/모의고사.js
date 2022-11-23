/**
* 1. 10,000 문제의 답지를 다 만든다
* 2. answers를 순회하면서 수포자가 맞춘 답의 갯수를 count 한다
* 3. count 요소 중에 가장 큰 수에 해당하는 수포자의 index 배열에 담아 return
* 예외 - 수포자 여러명일경우 오름차순으로 return
*/
function solution(answers) {
    const answer = [];
    const count = [0,0,0]
    const student = {
        '1번 수포자' : "12345".repeat(2000).split("").map(Number),//2000 패턴
        '2번 수포자' : "21232425".repeat(1250).split("").map(Number),//1250 패턴
        '3번 수포자' : "3311224455".repeat(1000).split("").map(Number)//1000 패턴
    }
    
    answers.forEach((value,index)=>{
      student['1번 수포자'][index] === value ? count[0] +=  1 : null;
      student['2번 수포자'][index] === value ? count[1] +=  1 : null;
      student['3번 수포자'][index] === value ? count[2] +=  1 : null;
    })

    count.forEach((value,index)=>{
      if(Math.max(...count) === value){
        answer.push(index+1)
      }
    })
    
    return answer.sort((a,b)=> a - b);
}