/**
 * [PGS] 올바른괄호 / Lv2
 * https://school.programmers.co.kr/learn/courses/30/lessons/12909
 *
 * @param {*} s string
 * @returns boolean
 */

function solution(s){
  let stack = 0;
  for(const a of s) {
    if(a === '(') stack ++;
    else stack --;
    if(stack < 0) return false;
  }
  return stack === 0 ? true : false;
}