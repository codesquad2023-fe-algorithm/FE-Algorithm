const solution = (a, b) => {
  const days = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const moths = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let result = 0;
  for (i = 0; i < a - 1; i++) {
    result += moths[i];
  }
  return days[(b + result - 1) % 7];
};

console.log(solution(5, 24));
