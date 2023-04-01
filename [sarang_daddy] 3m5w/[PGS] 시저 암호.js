// 아스키 코드
// 아스키 코드 : charCodeAt()
// 공백 = 32, a-z = 97-122, A-Z = 65-90

function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    const ascCode = s[i].charCodeAt();
    let changedAscCode = ascCode + n;

    if (ascCode === 32) {
      answer += s[i];
      continue;
    }

    if (65 <= ascCode && ascCode <= 90) {
      if (changedAscCode > 90) {
        changedAscCode -= 26;
      }
    }

    if (97 <= ascCode && ascCode <= 122) {
      if (changedAscCode > 122) {
        changedAscCode -= 26;
      }
    }

    answer += String.fromCharCode(changedAscCode);
  }

  return answer;
}

console.log(solution("a B z", 4));
