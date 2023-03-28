function solution(s, n) {
  let answer = '';

  for (let i = 0; i < s.length; i++) {
    const ASCII = s.charCodeAt(i);
    let calculatedASCII = ASCII + n;

    if (ASCII === 32) {
      answer += ' ';
      continue;
    }
    if (65 <= ASCII && ASCII <= 90) {
      if (calculatedASCII > 90) {
        calculatedASCII -= 26;
      }
    }
    if (97 <= ASCII && ASCII <= 122) {
      if (calculatedASCII > 122) {
        calculatedASCII -= 26;
      }
    }

    answer += String.fromCharCode(calculatedASCII);
  }

  return answer;
}
