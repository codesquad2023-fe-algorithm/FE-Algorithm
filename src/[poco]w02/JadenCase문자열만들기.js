function solution(s) {
  const newS = s.split(' ');
  const result = newS.map((word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase());
  return result.join(' ');
}
