// 2중 반복문으로 더해줌
// 두 배열의 길이는 같음

function solution(arr1, arr2) {
  for(let i=0;i<arr1.length;i++){
      for(let j=0;j<arr1[i].length;j++){
          arr1[i][j] = arr1[i][j]+arr2[i][j]
      }
  }
  return arr1;
}