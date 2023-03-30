function solution(s) {
  const result = {};
  const answer = [];

  for (let i = 0; i < s.length; i++) {
    if (!Object.keys(result).includes(s[i])) {
      result[s[i]] = s.indexOf(s[i], i);
      answer.push(-1);
    } else {
      answer.push(i - result[s[i]]);
      result[s[i]] = s.indexOf(s[i], i);
    }
  }
  return answer;
}
