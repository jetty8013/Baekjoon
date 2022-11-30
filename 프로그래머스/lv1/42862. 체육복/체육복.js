/**
* Greedy 알고리즘 문제
* 1. n 만큼 배열을 만든다
* 2. 만든 배열을 1로 채운다 ( 체육복 갯수 )
* 3. reserve에 해당하는 학생들은 +1 연산해준다
* 4. lost에 해당하는 학생들에게 -1 연산해준다
* 5. 첫 index 부터 마지막까지 다 더해준다 (앞뒤 학생이 여벌이 있는경우만)
* 6. filter 로 1 이상인 학생들의 수를 세어준다
* 
* 있는놈한테 나눠달라고 X
* 없는놈이 달라고 요구 O
*/
function solution(n, lost, reserve) {
  let answer = 0
  const student = new Array(n).fill(1)
  
  reserve.forEach(el => student[el-1] += 1);
  lost.forEach(el => student[el-1] -= 1)
  student.forEach((value,index) => {
    // if(value === 2){ // 여벌 있는 넘
    //   if(student[index+1] === 0){
    //     student[index] -= 1;
    //     student[index+1] += 1;
    //   }else if(student[index-1] === 0){
    //     student[index] -= 1;
    //     student[index-1] += 1;
    //   }
    // }

    if(value === 0){ // 여벌 없는 넘
      if(student[index-1] === 2){ // 당당하게 내놓으라고 요구하기
        student[index] += 1;
        student[index-1] -= 1;
      }
      else if(student[index+1] === 2){ 
        student[index] += 1;
        student[index+1] -= 1;
      }
    }
  })
  student.filter(el => el>=1 ? answer+=1 : null)

  return answer
}