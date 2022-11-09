// 제일 작은것만 삭제


function solution(arr) {
if(arr.length <= 1){return [-1]}

const minIndex = arr.indexOf(Math.min(...arr))
arr.splice(minIndex,1)

return arr;
}