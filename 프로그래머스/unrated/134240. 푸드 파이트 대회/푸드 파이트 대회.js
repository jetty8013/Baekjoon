/**
* food[0]은 수웅이가 준비한 물의 양이며, 항상 1입니다.
* food[i]는 i번 음식의 수입니다.
* food에는 칼로리가 적은 순서대로 음식의 양이 담겨 있습니다.
* [1, 3, 4, 6]
* [1] = 3
* [2] = 4
* [3] = 6
* 1112222333333
* 
* 1. 편의상 배열 뒤집음
* 2. 순회하면서 요소를 2로 나누고 소수점 버림
* 3. repeat을 사용해서 문자열 반복
* 4. 문자열 0 앞뒤로 반복한 문자열 추가
*/
function solution(food) {
  food.reverse()
  let str = "0"
  food.forEach((element,index) => {
    const foodCount = Math.floor(element/2);
    const foodStr = String(food.length-(index+1)).repeat(foodCount);
    str = foodStr+str+foodStr
  });
  return str
}