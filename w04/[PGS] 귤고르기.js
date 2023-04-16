/**
 * 귤 고르기 /
 * https://school.programmers.co.kr/learn/courses/30/lessons/138476
 *
 * @param {*} k 한 상자에 담으려는 귤의 개수
 * @param {*} tangerine 귤의 크기를 담은 배열
 * @returns 크기 종류 최솟값
 */
function solution(k, tangerine) {
  const map = new Map();
  for(const t of tangerine) {
    if(!map.has(t)) map.set(t, 1);
    else map.set(t, map.get(t) + 1);
  }

  const sizes = [...map.values()].sort((a, b) => b - a);
  let count = 0;
  let sum = 0;
  for(const b of sizes) {
    count++;
    sum += b;
    if(sum >= k) break;
  }
  return count;
}