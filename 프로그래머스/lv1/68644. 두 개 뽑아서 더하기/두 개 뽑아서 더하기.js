/**
* 1.반복문으로 모둔 자리 다 더하기
* 2.filter로 중복 제거하기
* 3. sort()로 정렬
*/
function solution(numbers) {
  let answer = [];
  numbers.forEach((element,index) => {
    for(let i = index+1;i<numbers.length;i++){
      answer.push(element + numbers[i]);
    }
  })
  answer = answer.filter((v,i) => answer.indexOf(v) === i).sort((a,b) => a - b);
  return answer;
}