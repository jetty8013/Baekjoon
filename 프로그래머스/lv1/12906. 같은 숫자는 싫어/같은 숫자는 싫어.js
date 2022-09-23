function solution(arr)
{
    let answer = []
    
    arr.forEach(value=>{
  let le = answer.length-1

  if(answer[le] !== value){
    answer.push(value)}
    })

    return answer;
}