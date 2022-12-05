/**
* 매일매일 최상위에서 k개 만큼 뽑아서 그중에 최하위 반환
*/
function solution(k, score) {
  const answer = [];
  const arr = [];

  score.forEach(value => {
    arr.push(value)
    arr.sort((a,b) => b - a)
    if(arr.length < k) answer.push(Math.min(...arr))
    else answer.push(arr[k-1])
  });

  return answer;
}
