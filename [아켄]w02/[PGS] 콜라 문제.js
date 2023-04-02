function solution(a, b, n) {
  let answer = 0;
  let total = n;

  while (total >= a) {
    answer += Math.floor(total / a) * b;
    total = (total % a) + Math.floor(total / a) * b;
  }

  return answer;
}
