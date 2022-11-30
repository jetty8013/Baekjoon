/**
* 참여자 participant
* 완주자 completion
* 1. completion에 있는 요소들을 participant에서 제거
* 2. 빈 값 filter로 정리
* 3. 1명이라고 했으니까 join 으로 마무리
*/

function solution1(participant, completion) {
  completion.forEach(element => {
    const findIndex = participant.indexOf(element)
    if(findIndex !== -1){
    delete participant[findIndex];
    }
  })
  return participant.filter(el => el!==undefined).join("")
}

/*
* 1. join(" ")으로 합치기
* 2. replace 로 하나씩 제거
* 3. 마지막 공백 제거
*/

function solution2(participant, completion) {
  let str = participant.join(" ")
  completion.forEach(element => {
    str = str.replace(element,"")
  });
  str = str.replaceAll(" ","")
  return str
}


/*
* sort 하고 다르면 리턴 ?
* ... ?.... 
*/

function solution(participant, completion) {
  participant.sort()
  completion.sort()
  for(let i = 0;i < participant.length;i++){
    if(participant[i] !== completion[i]){
      return participant[i]
    }
  }
}