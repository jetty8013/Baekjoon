let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n,m,r] = input.shift().split(" ").map(Number)
let graph = new Array(n+1).fill([]).map(() => new Array())
let cnt = 1 
input.forEach(value =>{
  value = value.split(" ").map(Number)
  graph[value[0]].push(value[1])
  graph[value[1]].push(value[0])
})
graph.forEach((value,index)=>{
  graph[index].sort((a,b)=>{return a - b})
})

let visited = new Array(graph.length).fill(0)

function dfs(num){
  visited[num] = cnt
  graph[num].forEach(value=>{
    if(visited[value] < 1){
      cnt += 1
    dfs(value)
    }
  })
  return
}

dfs(r)
visited.shift()
console.log(visited.join("\n"))
