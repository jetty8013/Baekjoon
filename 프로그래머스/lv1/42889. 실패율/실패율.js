/**
* 전체 스테이지의 개수 N
* 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages
* 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return
* 실패율 -> 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
* 
* 1. N+1 만큼 스테이지 배열 생성
* 2. 스테이지마다 실패율을 구해준뒤 gameStages 배열에 넣어준다
* 3. 실패율에 따라서 정렬
* 4. nowStages만 배열에 담아 리턴
*/

function solution(N, stages) {
  const gameStages = new Array(N+1).fill(0) // 3 이면 3+1 [0,0,0,0]
  
  gameStages.forEach((value,nowStages) => {
      if(nowStages === 0) return  // 0 스테이지는 없으니까 건너 뛴다
      const clearUser = stages.filter(el => nowStages<=el) // 스테이지에 도달한 플레이어 수
      const failUser = clearUser.filter(el => nowStages>=el) // 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수

      gameStages[nowStages] = {
        nowStages: nowStages,
        fail : failUser.length/clearUser.length
      };  // 스테이지와 실패율을 넣어줌
  })
  
  gameStages.splice(0,1)// 원본 배열에서 첫번째 인덱스 제거
  gameStages.sort((a,b) => { // fail만 정렬
    return a.fail > b.fail 
    ? -1 : a.fail < b.fail 
    ? 1 : 0
  })

  return gameStages.map(el => el.nowStages)
}