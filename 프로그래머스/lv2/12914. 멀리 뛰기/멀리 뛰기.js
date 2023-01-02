/**
3
1 [1,1,1]
2 [1,2]
3 [2,1]

4
1 [1,1,1,1]
2 [2,1,1]
3 [1,2,1]
4 [1,1,2]
5 [2,2]

5
1 [1,1,1,1,1]
2 [2,1,1,1]
3 [1,2,1,1]
4 [1,1,2,1]
5 [1,1,1,2]
6 [2,2,1]
7 [2,1,2]
8 [1,2,2]

피보나치 느낌이다
n-1 + n-2
*/

function solution(n) {
    const arr = [0,1,2];
    for(let i=3; i<=n; i++){
        arr.push((arr[i-1] + arr[i-2])%1234567);
    }
    return arr[n];
}



/**
* 1칸으로 n의 길이 만큼 다 채운다
*/
// function solution(n) {
//   const arr = new Array(n).fill(1n)
//   const answer = []
//   answer.push(arr)

//   for(let i=0;i<arr.length;i++){
//     const tmp = []
//     let num = 0
//     for(let j=0;j<arr.length;j++){
//       if(j === i) {
//         tmp.push(2)
//         num += 2
//         j++
//       }
//       else{
//         tmp.push(1)
//         num += 1
//       }
//     }
//     if(num === n) answer.push(tmp)
//   }
//   console.log(answer)
//   return (
//     n%2===0?(answer.length+1)%1234567n:answer.length%1234567n
//     )
// }