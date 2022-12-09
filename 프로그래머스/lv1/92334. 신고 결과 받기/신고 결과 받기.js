function solution(id_list, report, k) {
  const user = {
    reportId:{},
    reportedId:{},
    blockId:{},
    message : []
  } //
  
  id_list.forEach(el => {
    user.reportedId[el] = 0
    user.blockId[el] = 0
  })

  report.forEach(element => { //신고 기능
    const [left,right] = element.split(" ") // 메세지 구조분해
    //user.message.push(left+"가 "+ right + "를 신고했습니다.") // 메세지 누적

    if(user.reportId[`${left}`] === undefined) {
      user.reportId[`${left}`] = [right]
      user.reportedId[right] += 1
    }

    else if(user.reportId[`${left}`].includes(right) === false) {
      user.reportId[`${left}`].push(right)
      user.reportedId[right] += 1
    }
  });

  for(let i in user.reportId){
    let num = 0
    user.reportId[i].forEach(el => {
      if(user.reportedId[el] >= k) num++
    })
    user.blockId[i] = num
  }

  //신고된 아이디 기준으로 정지된 ID 횟수 출력
  //  console.log(user.reportId) 
  //  console.log(user.reportedId) //{ muzi: 1, frodo: 2, apeach: 0, neo: 2 }
  //  console.log(user.blockId) //{ muzi: 2, frodo: 1, apeach: 1, neo: 0 }
  return Object.values(user.blockId)
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
