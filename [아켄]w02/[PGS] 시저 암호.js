function solution(s, n) {
  const a = "a".charCodeAt(0);
  const z = "z".charCodeAt(0);
  const A = "A".charCodeAt(0);
  const Z = "Z".charCodeAt(0);
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") answer += " ";
    const sNum = s[i].charCodeAt(0);
    if (sNum >= a && sNum <= z) {
      const newStr = ((sNum + n - a) % (z - a + 1)) + a;
      answer += String.fromCharCode(newStr);
    }
    if (sNum >= A && sNum <= Z) {
      const newStr = ((sNum + n - A) % (Z - A + 1)) + A;
      answer += String.fromCharCode(newStr);
    }
  }

  return answer;
}
