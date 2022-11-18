/**
* 1. 객체에 숫자를 키로 , 영단어를 값 으로 매칭해서 미리 선언
* 2. 반복문으로 0~9까지 replaceAll 실행
*/

function solution(s) {
  const numberCompare = {
      0 : 'zero',
      1 : 'one',
      2: 'two',
      3 : 'three',
      4 : 'four',
      5 : 'five',
      6 : 'six',
      7 : 'seven',
      8 : 'eight',
      9 : 'nine'
  }

  let i = 0;

    while(i <= 9) {
      s = s.replaceAll(numberCompare[i], i);
      i++;
    }
  return Number(s);
}



// 예전 코드
// let memo = new Map();
// memo.set(0,"zero")
// memo.set(1,"one")
// memo.set(2,"two")
// memo.set(3,"three")
// memo.set(4,"four")
// memo.set(5,"five")
// memo.set(6,"six")
// memo.set(7,"seven")
// memo.set(8,"eight")
// memo.set(9,"nine")


// function solution(s) {
//     var answer = 0;
//     if(s.search(/^[0-9]*$/) == 0){
//         return parseInt(s)
//     }    
//     for(let a = 0;a < 10; a++){
//     s.indexOf(memo.get(a))    
//     s = s.replace(memo.get(a),a);
//     }
//     return  solution(s);
// }