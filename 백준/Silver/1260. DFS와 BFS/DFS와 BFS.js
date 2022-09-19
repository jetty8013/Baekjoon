let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

let [N,M,V] = input.shift().toString().split(" ").map(Number)
let visited = [...new Array(N+1)].fill(false);
let graph = [...new Array(N+1)].map(()=>[])
let result = [];

//graph[vFront] 배열이 오름차순을 유지하도록 vBack을 적절한 위치에 삽입
const insertEdge = (vFront, vBack) => {
  let index;
  for(index=0; index<graph[vFront].length; index++){
      //인접한 정점 배열에서 vBack보다 크거나 같은 정점 찾을 때까지 continue
      if(graph[vFront][index]<vBack){
          continue;
      }
  
      //문제에서 두 정점 사이에 여러 개의 간선이 있을 수 있다고 했으므로
      //인접한 정점 배열에 이미 vBack 정점이 있다면 삽입 인덱스에 null 저장
      if(graph[vFront][index]===vBack){
          index=null;
      }
      break;
  }

//삽입 인덱스가 null이 아니라면 vBack 삽입 인덱스에 삽입
  if(index!==null){
      graph[vFront].splice(index, 0, vBack);
  }
};

input.forEach(value=>{
  value = value.toString().split(" ").map(Number)
  //graph[value[0]].push(value[1])
  //graph[value[1]].push(value[0])
  insertEdge(value[0],value[1])
  insertEdge(value[1],value[0])
})







//깊이 우선 탐색, 현재 정점 매개변수로 받음
const dfs = (v) => {
	//이미 방문했으면 리턴
    if(visited[v]){
        return;
    }

	//방문 사실 저장
    visited[v]=true;
    //결과 변수에 정점 삽입
    result.push(v);
    //인접한 정점 배열을 차례로 돌며 방문하지 않은 정점 방문
    graph[v].forEach((vertex)=>{
        if(!visited[vertex]){
            dfs(vertex);
        }
    });
};

//너비 우선 탐색, 시작 정점 매개변수로 받음
const bfs = (vStart) => {
	//방문할 정점을 담는 배열
    const willVisit = [vStart];
    let v;
    //방문할 정점이 안 남을 때까지
    while(willVisit.length!==0){
    	//방문할 정점 배열의 첫 번째 원소 삭제 후 저장
        v=willVisit.shift();
        //이미 방문했으면 continue
        if(visited[v]){
            continue;
        }

		//방문 사실 저장
        visited[v]=true;
        //결과 변수에 정점 삽입
        result.push(v);
        //인접한 정점 배열을 차례로 돌며 방문하지 않은 정점을
        //방문할 정점 배열의 끝에 삽입
        graph[v].forEach((vertex)=>{
            if(!visited[vertex]){
                willVisit.push(vertex);
            }
        });
    }
}


dfs(V)
console.log(result.join(" "));
visited.fill(false);
result=[]
bfs(V)
console.log(result.join(" "));

