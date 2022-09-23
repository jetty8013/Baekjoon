function solution(answers) {
    
    var answer = [];
    
    
    let a = "12345".repeat(2000).split("").map(Number)//2000
    let b = "21232425".repeat(1250).split("").map(Number)//1250
    let c = "3311224455".repeat(1000).split("").map(Number)//1000

let count = [0,0,0]

answers.forEach((value,index)=>{
  if(a[index] == value){count[0] +=  1}
  if(b[index] == value){count[1] +=  1}
  if(c[index] == value){count[2] +=  1}  
})

count.forEach((value,index)=>{
  if(Math.max(...count) == value){
    answer.push(index+1)
  }
})

answer.sort((a,b)=>a-b)
    
        return answer;
}