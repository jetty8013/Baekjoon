let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let pc = Number(input.shift())
let link = Number(input.shift())
let arr = input.map(value => {return value.toString().split(" ").map(Number)})
let graph = [...new Array(pc + 1)].map(() => []);
let visited = [...new Array(pc + 1)].fill(0);
let answer = 0

arr.forEach(value =>{
   graph[value[0]].push(value[1])
   graph[value[1]].push(value[0])
})

visited[1] = 1
function dfs(start){
   for(let end of graph[start]){
      if(!visited[end]){
         visited[end] = 1
         answer++
         dfs(end)
      }
   }
}
dfs(1)

console.log(answer)