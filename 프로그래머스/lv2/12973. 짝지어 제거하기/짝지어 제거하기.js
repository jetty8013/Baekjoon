// function solution(s) {   
//   let index = 0;
//   while(true){
//       if(s.length === 0) return 1
//       if(s.length <= index || s.length%2 !== 0) return 0
//       if(s[index] === s[index+1]) {
//           s = s.slice(0,index)+s.slice(index+2)
//           index = 0
//       }else
//           index++
//   }
// }

// 실행초과 이빠이 ..
/**
* 인형뽑기처럼 스택으로 해결
*/
function solution(s) { 
  if(s.length%2 !== 0) return 0;
    
  let arr = [];
  for(let i=0;i<s.length;i++){
      if(s[i] === arr.at(-1)){
          arr.pop()
      }
      else arr.push(s[i])
  }
    return arr.length>0? 0:1
}