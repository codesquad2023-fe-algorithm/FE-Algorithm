function solution(s) {
  let answer = s
    .toLowerCase()
    .replace(/\b[a-z]/g, (char) => char.toUpperCase());
  return answer;
}

console.log(solution("for the last week"));
