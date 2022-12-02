/**
* 1. X , Y 문자열 의 숫자를 세어준다
* 2. 세어준것중 1이상 숫자만 다시 문자열로 반환
* 3. X, Y의 짝꿍이 0으로만 구성되어 있다면, 짝꿍은 0입니다. ex) "00" => "0"
*/

function solution(X, Y) {
  let str = ""
  const countX = new Array(10).fill(0);
  const countY = new Array(10).fill(0);
  
  X.split("").forEach(value => {
    countX[value]++
  });

  Y.split("").forEach(value => {
    countY[value]++
  });

  countX.forEach((value,index) => {
    if(countY[index] !==  0 && countX[index] !==  0){
      str = String(index).repeat(Math.min(countX[index],countY[index])) + str
    }
  })

  if(str === "") return "-1"
  if(Number(str) === 0) return "0"
  return str
}