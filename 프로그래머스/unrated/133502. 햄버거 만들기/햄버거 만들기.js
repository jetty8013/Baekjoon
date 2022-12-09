/**
* 1. 빵
* 2. 야채
* 3. 고기
* 양쪽 끝이 빵인지 체크
* 빵 – 야채 – 고기 - 빵
* 1 2 3 1
*/

// function solution(ingredient) {
//   let bergger = ingredient.join("")
//   let answer = 0;

//   while(bergger.match('1231') !== null){
//       bergger = bergger.replace('1231',"")
//       answer++
//     }
//     return answer
  
// }

/**
* 1. 빵
* 2. 야채
* 3. 고기
* 양쪽 끝이 빵인지 체크
* 빵 – 야채 – 고기 - 빵
* 1 2 3 1
*/

function solution(ingredient) {
  const tmp = []
  let answer = 0
  ingredient.forEach(element => {
    tmp.push(element)
    if(tmp.slice(-4).join("") === "1231") {
      tmp.pop()
      tmp.pop()
      tmp.pop()
      tmp.pop()
      answer += 1 
    }
  });
  return answer
}