/**
* 8개의 크기가 [1, 3, 2, 5, 4, 5, 2, 3] 
* 요소의 갯수가 많은것으로
*/
function solution(k, tangerine) {
  let answer = 0
  const obj = { }
  
  tangerine.forEach(element => {
    if(obj[element] === undefined) obj[element] = 0
    obj[element] += 1
  });
/*
    { 
    '1': 1, 제일 작은 요소 제거 대상
    '2': 2, 
    '3': 2, 
    '4': 1, 제일 작은요소 제거 대상
    '5': 2 
    }
*/
  const arr = Object.entries(obj).sort((a,b) => { // 갯수 기준으로 내림차순 정렬 
    if (b[1] > a[1]) return 1;
    if (b[1] < a[1]) return -1;
  }) // [ [ '2', 2 ], [ '3', 2 ], [ '5', 2 ], [ '1', 1 ], [ '4', 1 ] ]

  for(let i = 0; i < arr.length; i++){
    if(k < 1) break

    // if(k - arr[i][1] >= 0){
      k-=arr[i][1]
      answer++
    // }
  }
  
  // if(k>0) return k
  return answer
}