// 배열 순회하면서
// 가로 세로 비교 가장 큰 수를 wallet 객체에 넣어줌

function solution(sizes) {
    const wallet = {
        w : 0,
        h : 0
    }
    sizes.forEach(sizesArr => {
        // 가로 세로 돌린다는 말이 있으니 내림차순으로 정렬
        sizesArr.sort((a,b) => b - a)
            const size = {
                w : sizesArr[0],
                h : sizesArr[1]
            }
            wallet.h < size.h ? wallet.h = size.h : null
            wallet.w < size.w ? wallet.w = size.w : null
        })
    return wallet.w*wallet.h;
}