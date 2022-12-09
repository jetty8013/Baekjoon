/**
* choices 123 왼 4 가운데 567 오른쪽
* A/N
* survey의 원소는 "RT", "TR", "FC", "CF", "MJ", "JM", "AN", "NA" 중 하나입니다.   서로 섞이지 않고 쌍으로 이뤄져있음
*/

function solution(survey, choices) {
  let obj = { // 설문지 초기값
    model: function(str){ // 그룹 찾기
      if(str[0] === "R" || str[0] === "T") return "RT";
      if(str[0] === "C" || str[0] === "F") return "CF";
      if(str[0] === "J" || str[0] === "M") return "JM";
      if(str[0] === "A" || str[0] === "N") return "AN";
    },
    RT: {
      R: 0,
      T: 0
    },
    CF: {
      C: 0,
      F: 0,
    },
    JM: {
      J: 0,
      M: 0
    },
    AN: {
      A: 0,
      N: 0
    },
  }

  choices.forEach((element,index) => { // 설문지 결과 반영
    let test = obj.model(survey[index])
    if(element > 4){
      obj[test][survey[index][1]] += element-4
    }
    else if(element < 4){
      obj[test][survey[index][0]] += (element-4)*-1
  }
  });

  delete obj.model //안쓰니까 삭제띠
  
  const result = Object.values(obj).map(el => { // 결과 필터링
    const elementArr = Object.entries(el)
    if(elementArr[0][1] >= elementArr[1][1]) return elementArr[0][0] // 크면 왼쪽  같으면 사전순 이라 크거나 같으면
    if(elementArr[0][1] < elementArr[1][1]) return elementArr[1][0]
  })
  //[ { R: 0, T: 3 }, { C: 3, F: 0 }, { J: 0, M: 2 }, { A: 1, N: 1 } ] 를 
  /*
  [
  [ [ 'R', 0 ], [ 'T', 3 ] ],
  [ [ 'C', 3 ], [ 'F', 0 ] ],
  [ [ 'J', 0 ], [ 'M', 2 ] ],
  [ [ 'A', 1 ], [ 'N', 1 ] ]
  ]
  */
  return result.join("")
}