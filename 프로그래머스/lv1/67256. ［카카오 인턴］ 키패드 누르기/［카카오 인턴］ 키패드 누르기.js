/**
* L 의 영역 1 , 4 , 7
* R 의 영역 3 , 6 , 9
* 공동 영역 2 , 5 , 8 , 0
* 각자의 영역의 거리를 구해서 사용할 손을 반환
* 거리가 같으면 hand 이용

  L |  B  | R
  1 |  2  | 3
  4 |  5  | 6
  7 |  8  | 9
  * |  0  | #

* 만약에 가운데 8 [4 ,3]
* 시작 
  L |  B  | R   
  1 |  2  | 3  4   4   4 
  4 |  5  | 6  3   3   3
  7 |  8  | 9  2   2   2
  * |  0  | #  1   1   1
*/

function solution(numbers, hand) {
  let nowKeyLeft = "*"; // *,# = 1 초기 위치
  let nowKeyRight = "#";
  let str = ""
  
  const keypad = {
    left  : "L",
    right : "R",
    "*" : ["L",1],
    "#" : ["R",1],
    
    1 : ["L",4],
    4 : ["L",3],
    7 : ["L",2],

    3 : ["R",4],
    6 : ["R",3],
    9 : ["R",2],

    2 : [4,3],
    5 : [3,2],
    8 : [2,1],
    0 : [1,0]
  }
  
  numbers.forEach(value => {
      if([2,5,8,0].includes(value)){
        let absLeft,absRight;

        if(([2,5,8,0].includes(nowKeyLeft) === true) && ([2,5,8,0].includes(nowKeyRight) === true)){
          absLeft =  Math.abs(keypad[nowKeyLeft][0]-keypad[value][0]) 
          absRight = Math.abs(keypad[nowKeyRight][0]-keypad[value][0]) 
        }
        else if(([2,5,8,0].includes(nowKeyLeft) === true) && ([2,5,8,0].includes(nowKeyRight) === false)){
          absLeft =  Math.abs(keypad[nowKeyLeft][0]-keypad[value][0])
          absRight = Math.abs((keypad[nowKeyRight][1]-1)-keypad[value][0])

          if(keypad[nowKeyRight][1] > keypad[value][0]) absRight += 2
        }
        else if(([2,5,8,0].includes(nowKeyLeft) === false) && ([2,5,8,0].includes(nowKeyRight) === true)){
          absLeft =  Math.abs((keypad[nowKeyLeft][1]-1)-keypad[value][0])
          absRight = Math.abs(keypad[nowKeyRight][0]-keypad[value][0])
            
          if(keypad[nowKeyLeft][1] > keypad[value][0]) absLeft += 2
        }
        else if(([2,5,8,0].includes(nowKeyLeft) === false) && ([2,5,8,0].includes(nowKeyRight) === false)){
          absLeft = Math.abs(keypad[nowKeyLeft][1]-keypad[value][0]);
          absRight = Math.abs(keypad[nowKeyRight][1]-keypad[value][0]);
        }

      if(absLeft === absRight) {
          str += keypad[hand]
          if(hand === "right") { 
              nowKeyRight = value
          }
          else if(hand === "left") {
              nowKeyLeft = value
          }
      }
      else if(absLeft < absRight) { 
        str += "L"
        nowKeyLeft = value
      }
      else if(absLeft > absRight) { 
        str += "R"
        nowKeyRight = value
      }

    }

    else if(keypad[value][0] === "L"){
      str += "L"
      nowKeyLeft = value
    }

    else if(keypad[value][0] === "R"){
      str += "R"
      nowKeyRight = value
    }
  })
  
  return str
}