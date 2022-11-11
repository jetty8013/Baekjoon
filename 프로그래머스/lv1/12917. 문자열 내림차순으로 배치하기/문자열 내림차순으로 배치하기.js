// split()으로 쪼개주고
// sort()를 이용하여 정렬 뒤집어서 합쳐! ...

function solution(s) {   
    return  s.split('').sort().reverse().join('');
}