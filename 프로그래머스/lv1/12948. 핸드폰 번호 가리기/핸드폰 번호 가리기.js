// slice 로 뒤에서 4개 가져옴
// 나머지 replace와 정규식(Reqular Expression)으로 *로 처리


function solution(phone_number) {
    const first = phone_number.slice(0,-4).replace(/[0-9]/g,'*')
    const second = phone_number.slice(-4)
    return first+second;
}