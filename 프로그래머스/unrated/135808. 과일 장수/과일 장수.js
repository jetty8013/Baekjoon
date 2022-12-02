/**
* 박스개수 = Math.floor(score.length/m)
* 1. score 내림차순 정렬
* 2. 앞에서부터 m*box개 만큼 splice 해서 자르기
* 3. 박스 갯수만큼 자르면서 result에 더해주기
*/

function solution(k, m, score) {
  let result = 0;
  const box = Math.floor(score.length/m);
  let i = m-1;
    
  score.sort((a,b) => b - a)
  const applePrice = score.splice(0,m*box)
  while(i < applePrice.length){
      result += applePrice[i]*m
      i += m
  }
  return result
}