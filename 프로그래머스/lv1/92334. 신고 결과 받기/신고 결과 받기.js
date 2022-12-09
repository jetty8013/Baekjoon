/**
 * id_list
 * 중복횟수 객체 생성
 * report로 순회
 * 정지기준 k
 */

function solution(id_list, report, k) {
  const reportMessage = [] //메세지 누적
  const reportUser = {} //
  const reportedUser = {} //
  const result = {}
  id_list.forEach(el => {
    reportedUser[el] = 0
    result[el] = 0
  })

  report.forEach(element => { //신고 기능
    [report,reported] = element.split(" ")
    reportMessage.push(report+"가 "+ reported + "를 신고했습니다.") // 메세지 누적
    if(reportUser[`${report}`] === undefined) {
      reportUser[`${report}`] = [reported]
      reportedUser[reported] += 1
    }
    else if(reportUser[`${report}`].includes(reported) === false) {
      reportUser[`${report}`].push(reported)
      reportedUser[reported] += 1
    }
  });

  for(let i in reportUser){
    let num = 0
    reportUser[i].forEach(el => {
      if(reportedUser[el] >= k) num++
    })
    result[i] = num
  }

  //신고된 아이디 기준으로 정지된 ID 횟수 출력
  // console.log(reportUser)
  // console.log(reportedUser)
  // console.log(result)

  return Object.values(result)
}

/*
let state = []
let save = []
let answer2 = []
let answer = []
function solution(id_list, report, k) {
    for(let i=0;i<id_list.length;i++){
    state.push({이름 : id_list[i],횟수 : 0,신고한사람 : ""})
    }
    for(let a=0;a<report.length;a++){
       save = report[a].split(" ")
            for(let i=0;i<id_list.length;i++){
               if(state[i].이름 == save[1]){
                   if(state[i].신고한사람.indexOf(save[0]) == -1){
                   //if(state[i].신고한사람.indexOf(save[1]) == -1){
                   state[i].횟수 += 1
                   state[i].신고한사람 += save[0] + " "
                   }
               }
            }
    }

    for(let x=0;x<id_list.length;x++){
        if(state[x].횟수 >= k){
            answer2.push(state[x].신고한사람.split(" "))
            
        } 
    }
    answer2 = answer2.join("").split(",")
    //answer2.pop()
    answer.length = id_list.length
    answer.fill(0)

    for(let c=0;c<answer2.length;c++){
           answer[id_list.indexOf(answer2[c])] += 1
    }        
    
    return answer;
}
*/
