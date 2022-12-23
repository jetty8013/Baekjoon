/**
* 최소크기( 8, 1 )
* 브라운 브라운 브라운
* 브라운 옐로우 브라운
* 브라운 브라운 브라운
*
* 크기( 24, 24 )
* 브라운 브라운 브라운 브라운 브라운 브라운 브라운 브라운
* 브라운 옐로우 옐로우 옐로우 옐로우 옐로우 옐로우 브라운
* 브라운 옐로우 옐로우 옐로우 옐로우 옐로우 옐로우 브라운
* 브라운 옐로우 옐로우 옐로우 옐로우 옐로우 옐로우 브라운
* 브라운 옐로우 옐로우 옐로우 옐로우 옐로우 옐로우 브라운
* 브라운 브라운 브라운 브라운 브라운 브라운 브라운 브라운
*
* 노란색 6*4 총크기 8*6 
* 노란색은 중앙
* 그 주위를 브라운으로 감싼다
* 가로가 세로보다 더 길거나 같다 <<
* 노란색 약수 구하기
*
* divisor
* 1. yellow의 약수와 yellow를 약수로 나눴을때의 수를 배열로 구해준다
* 2. 배열의 첫번째 요소를 가로, 두번째 요소를 세로라고 가정한다
* 3. 가로 기준으로 오름차순 정렬 해준다

* solution
* 1. divisor함수를 이용해 약수의 배열을 받아온다 -> yellowArr
* 2. 받아온 배열의 가로+2 * 세로+2 했을때 brown+yellow 합과 같으면 리턴해준다
*/
function solution(brown, yellow) {
    let yellowArr = divisor(yellow)
    console.log(yellowArr)
    for(let i=0;i<yellowArr.length;i++){
        const x = yellowArr[i][0]
        const y = yellowArr[i][1]
        if((x+2)*(y+2) === brown+yellow) return [x+2,y+2]
    }
}


function divisor(num) {
    const arr = []
    for(let i=1;i<=Math.sqrt(num);i++){
        if(num%i === 0){
            arr.push([num/i,i])
        }
    }
    return [...new Set(arr.sort((a,b) => {
        if(a[0] - b[0]) return -1
        if(a[0] - b[0]) return 1
    }))]
}