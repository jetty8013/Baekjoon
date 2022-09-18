let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(" ").map(Number)
let visited = new Array(input[0]).fill(0)
let output = new Array()
let result = ''


function dfs(n){
   if(n === input[1]){
      result += `${output.join(" ")}\n`
      return
   }

   for(let i=0;i<input[0];i++){
     //if(visited[i]) continue;
   output.push(i+1)
   dfs(n+1,i)
   output.pop()
   }
}

dfs(0)
console.log(result.trim())



