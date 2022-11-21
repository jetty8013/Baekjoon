/**
* 총 N 마리의 폰켓몬 중에서 N/2마리를 구해야 한다
* 1. Set 으로 nums를 넣어 중복을 제거해준 객체와 그 객체의 크기를 구한다
* 2. nums의 길이 절반 보다 Set으로 구한 객체의 크기를 비교해서 반환
*/
function solution(nums) {
    let answer = new Set(nums).size
    return (nums.length/2) >= answer? answer : (nums.length/2);
}