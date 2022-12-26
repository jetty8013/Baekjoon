/**
*
*/
function solution(n, words) {
    const set = new Set(); //set = 나온 단어들 담는 객체(중복 검사용)
    set.add(words[0]) // 기본 단어 하나 추가, 처음사람은 탈락 안함
    
    for(let i=1;i<words.length;i++){ //위에서 추가했으니까 1부터 시작 
        if(set.has(words[i]) || words[i][0] !== words[i-1].at(-1)) { // 탈락 조건 : set객체 안에 단어 존재하는지 or 마지막 글자와 처음글자 불일치하는지 
            return [i%n+1,parseInt(i/n)+1] //[가장 먼저 탈락하는 사람의 번호,몇 번째 차례에 탈락]
        }
        set.add(words[i]) // set객체에 없으면 단어 추가
    }
    
    return [0,0]; // 반복문 순회해도 조건 안맞으면 기본값 return
}