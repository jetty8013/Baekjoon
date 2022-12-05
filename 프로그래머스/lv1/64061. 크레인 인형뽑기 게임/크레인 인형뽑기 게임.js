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
    let stack = []
    let result = 0;
    
    moves.forEach(value => {
        for(let i = 0; i < board.length; i++){
            if(board[i][value-1] !== 0){
                if(stack[stack.length-1] === board[i][value-1]){
                    result += 2
                    board[i][value-1] = 0
                    stack.pop()
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