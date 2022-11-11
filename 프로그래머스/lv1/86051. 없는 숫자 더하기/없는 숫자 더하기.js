// function solution(numbers) {
//     var answer = 0;
    
//     let save = [1,2,3,4,5,6,7,8,9,0];
    
    
//     for(let a=0;a<save.length;a++){
//            if(numbers.indexOf(save[a])== -1){
//                answer += save[a]
//                 }     
//     }
//     return answer;
// }
// 옛날에 풀었던 코드 ... 왜저렇게함 ?;;


// 0부터 9까지 반복문 돌면서 indexOf(i) 가 없으면 answer에 더해주기
// includes() 도 가능 true / false 

function solution(numbers) {
    var answer = 0;
    for(let i=0;i<=9;i++){
        if(numbers.indexOf(i) === -1) answer += i
    }
    return answer;
}