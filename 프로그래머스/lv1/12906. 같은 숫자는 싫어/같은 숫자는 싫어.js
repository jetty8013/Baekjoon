// arr 순회하면서 다음 index의 요소가 현재 index의 요소와 같으면 건너뜀

function solution(arr)
{
    var answer = [];
    
    arr.forEach((element,index) => {
      if(arr[index+1] !== element){
        answer.push(element)
      }
    });

    return answer;
}