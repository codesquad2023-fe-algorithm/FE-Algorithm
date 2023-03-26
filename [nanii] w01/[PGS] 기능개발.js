/**
 * [PGS] 기능개발 / Lv2
 * https://school.programmers.co.kr/learn/courses/30/lessons/42586
 * @param {*} progresses
 * @param {*} speeds
 * @returns array
 */
function solution(progresses, speeds) {
  const days = progresses.map((progress, index) => Math.ceil((100 - progress)/speeds[index]));

  let answer = [];
  let count = 1;
  let date = days[0];
  for(let i = 1 ; i < days.length; i ++) {
    if(date >= days[i]) count ++;
    else {
      date = days[i];
      answer.push(count);
      count = 1;
    }
  }
  answer.push(count);
  return answer;
}