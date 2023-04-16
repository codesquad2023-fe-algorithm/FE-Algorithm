/**
 * [PGS] 같은 숫자는 싫어 / Lv1
 * https://school.programmers.co.kr/learn/courses/30/lessons/12906
 *
 * @param {*} arr
 * @returns
 */
function solution(arr) {
  let answer = [];
  for(let i = 0; i < arr.length; i ++) {
      if(answer.lenght === 0) answer.push(arr[i]);
      if(answer.at(-1) !== arr[i]) {
          answer.push(arr[i]);
      } else continue;
  }
  return answer;
}