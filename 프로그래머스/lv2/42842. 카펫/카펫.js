/**
* 최소크기( 8, 1 )
* 브라운 브라운 브라운
* 브라운 옐로우 브라운
* 브라운 브라운 브라운
*
* 크기( 10, 2 )
* 브라운 브라운 브라운 브라운
* 브라운 옐로우 옐로우 브라운
* 브라운 브라운 브라운 브라운
*
* 크기( 24, 24 )
* 브라운 브라운 브라운 브라운 브라운 브라운 브라운 브라운
* 브라운 옐로우 옐로우 옐로우 옐로우 옐로우 옐로우 브라운
* 브라운 옐로우 옐로우 옐로우 옐로우 옐로우 옐로우 브라운
* 브라운 옐로우 옐로우 옐로우 옐로우 옐로우 옐로우 브라운
* 브라운 옐로우 옐로우 옐로우 옐로우 옐로우 옐로우 브라운
* 브라운 브라운 브라운 브라운 브라운 브라운 브라운 브라운
*
* 노란색은 중앙
* 그 주위를 브라운으로 감싼다
* 가로가 세로보다 더 길거나 같다 <<
* 노란색 약수 구하기
* 1x1
* 6x4
* 8x6
*/
function solution(brown, yellow) {
    let yellowX = divisor(yellow)
    for(let i=0;i<yellowX.length;i++){
        const x = yellowX[i][0]
        const y = yellowX[i][1]
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