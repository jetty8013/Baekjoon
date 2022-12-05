/**
* [0,0,0,0,0],
* [0,0,1,0,3],
* [0,2,5,0,1],
* [4,2,4,4,2],
* [3,5,1,3,1]

* 스택 / 큐
* 크레인 위치대로 움직여서 인형 탐색
* 인형 board  크레인 위치 moves
* 
*/

function solution(board, moves) {
    let stack = [] // 인형 쌓기
    let result = 0;
    
    moves.forEach(value => { //찝게 움직이기
        for(let i = 0; i < board.length; i++){//크레인이 내려오면서 인형 집는 반복문
            if(board[i][value-1] !== 0){
                if(stack[stack.length-1] === board[i][value-1]){ //stack의 마지막 인형과 크레인으로 집은 인형이 같을떄
                    result += 2
                    board[i][value-1] = 0 // 집은 인형 board자리 0으로 바꿔줌
                    stack.pop() //쌓인 인형 하나 제거
                    break
                }
                stack.push(board[i][value-1])
                board[i][value-1] = 0
                break
            }
        }
    })
  return result;
}