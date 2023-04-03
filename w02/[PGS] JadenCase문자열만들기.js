/**
 * JadenCase 문자열 만들기 / Lv2
 * https://school.programmers.co.kr/learn/courses/30/lessons/12951
 * @param {*} s string
 * @returns string
 */
function solution(s) {
  return s.split(' ').map(str =>
    str.charAt(0).toUpperCase() + str.substring(1).toLowerCase()
  ).join(' ');
}

//첫번째 시도 -> 런타임에러 (s[0] 말고 String.charAt()메서드를 사용하면 런타임에러가 안납니다..)
function solution(s) {
  return s.split(' ').map(str =>
    str[0].toUpperCase() + str.substring(1).toLowerCase()
  ).join(' ');
}

//두번째 시도
function solution(s) {
  let answer = s[0].toUpperCase();
  let index;
  for(let i = 1; i < s.length; i ++) {
    const str = s[i];
    if(str === ' ') {
      answer += ' ';
      index = i + 1;
    } else if(i === index) answer += str.toUpperCase();
    else answer += str.toLowerCase();
  }
  return answer;
}