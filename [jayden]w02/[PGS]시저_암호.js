function solution(s, n) {
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    let letterCode = s.charCodeAt(i);
    if (letterCode !== 32) {
      if (letterCode <= 90) {
        if (letterCode + n <= 90) {
          letterCode += n;
        } else {
          letterCode += n - 26;
        }
      } else {
        if (letterCode + n <= 122) {
          letterCode += n;
        } else {
          letterCode += n - 26;
        }
      }
    }
    answer.push(String.fromCharCode(letterCode));
  }
  return answer.join('');
}
