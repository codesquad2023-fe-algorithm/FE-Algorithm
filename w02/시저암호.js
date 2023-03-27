/**
 * 시저암호 / Lv1
 * https://school.programmers.co.kr/learn/courses/30/lessons/12926
 * @param {*} s
 * @param {*} n
 * @returns
 */
function solution(s, n) {
  return [...s].reduce((acc, cur) => {
    if(cur === ' ') acc += ' ';
    else {
      const index = cur.charCodeAt();
      if((index + n > 90 && index > 64 && index < 91)|| index + n > 122) {
        acc += String.fromCharCode(index + n - 26);
      } else acc += String.fromCharCode(index + n);
    }
    return acc;
  }, '');
}