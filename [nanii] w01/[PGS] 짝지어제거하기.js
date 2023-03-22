/**
 * 짝지어 제거하기 / Lv2
 * https://school.programmers.co.kr/learn/courses/30/lessons/12973
 * @param {*} s
 * @returns
 */
function solution(s){
  const answer = [];
  for(const a of s) {
    const length = answer.length;
    if(length === 0 || answer[length - 1] !== a) answer.push(a);
    else answer.pop();
  }
  return answer.length === 0 ? 1 : 0;
}