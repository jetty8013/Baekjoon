/** 
* n * n 만큼의 길이를 가지고 0으로 채워진 배열 생성  ( Array.from , map 등등 방법으로)
* arr1 각 요소 2진수로 변경하여 생성했던 배열의 각 위치의 요소 변경
* arr2 각 요소 2진수로 변경하여 생성했던 배열의 각 위치의 요소 변경
* 2진수로 변경했는데 n 보다 작으면 맨앞에 0 붙이기
*/

function solution(n, arr1, arr2) {
    const answer = []
    const answerArr = Array.from(Array(n), () => Array(n).fill(" "))

    arr1.forEach((value,index) => {
        if(value.toString(2).length < n){
            let count = n-value.toString(2).length
            value =  "0".repeat(count)+value.toString(2)
        }else{
            value = value.toString(2)
        }
        for(let i = 0;i<value.length; i++){
            if(value[i] === "1"){
                answerArr[index][i] = "#"
            }
        }
    });

    arr2.forEach((value,index) => {
        if(value.toString(2).length < n){
            let count = n-value.toString(2).length
            value =  "0".repeat(count)+value.toString(2)
        }else{
            value = value.toString(2)
        }
        for(let i = 0;i<value.length; i++){
            if(value[i] === "1"){
                answerArr[index][i] = "#"
            }
        }
    });

    answerArr.forEach(value =>{
        answer.push(value.join(""))
    })

    return  answer;
}