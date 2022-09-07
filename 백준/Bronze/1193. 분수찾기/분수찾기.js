let fs = require('fs');
let input1 = fs.readFileSync('/dev/stdin').toString().trim();

let input = Number(input1)
let cover = 1;
//라인 1씩 증분하면서 몇개까지 커버 가능한지 ?
let i=1;//i가 몇번째 줄인지 ?


if(input == 1){
  console.log(1+"/"+1)
}
else{
while(true){
  cover += i+1
  i++
  if(cover>=input){
    break
  }
}
/*
console.log(cover+"안에서 커버 가능")
console.log(cover-i+"개부터 "+`${input-(cover-i)} 개 진행`)
console.log(i+"번째 라인")
// i-1의 커버 갯수 필요 start = cover*(i-1)
// 라인이 짝수면 아래쪽 대각선으로 진행 [1씩 증가/i-1]    input - start 만큼 반복

*/

if(i%2 == 0){
  let move = input-(cover-i)
  console.log(move+"/"+(i-(move-1)))
}else{
  let move = input-(cover-i)
  console.log((i-(move-1))+"/"+move)
}
}