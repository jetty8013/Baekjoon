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