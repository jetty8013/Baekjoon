/**
* 매일매일 최상위에서 k개 만큼 뽑아서 그중에 최하위 반환
* 
* 1. score 요소 순회
* 2. rank 배열에 score 요소 push
* 3. rank 배열 내림차순으로 정렬
* 4. k보다 rank 의 길이가 짧으면 rank 배열 중에서 가장 작은 요소 반환
* 5. rank 배열 길이가 k-1 이상이면 rank[k-1] 반환 (명예의전당 k등)
*/
function solution(k, score) {
  const answer = [];
  const rank = [];

  score.forEach(value => {
    rank.push(value)
    rank.sort((a,b) => b - a)
    if(rank.length < k) answer.push(Math.min(...rank))
    else answer.push(rank[k-1])
  });

  return answer;
}
