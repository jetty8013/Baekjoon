let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(" ").map(Number)
let visited = new Array(input[0]+1).fill(0)
let output = new Array()
let result = ''


function dfs(n){
   if(n === input[1]){
      result += `${output.join(" ")}\n`
      return
   }

   for(let i=1;i<=input[0];i++){
     if(visited[i] === 1) continue;
     
     visited[i] = 1
     output.push(i)
     dfs(n+1)

     output.pop()
     visited[i] = 0     
   }
}

dfs(0)
console.log(result.trim())

