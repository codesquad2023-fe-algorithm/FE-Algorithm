// 아스키 코드
// 아스키 코드 : charCodeAt()
// 공백 = 32, a-z = 97-122, A-Z = 65-90

function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    let ascCode = s[i].charCodeAt();
    console.log(ascCode);

    if (ascCode === 32) answer += s[i];

    if (97 <= ascCode && ascCode <= 122) {
      let changedAscCode = ascCode + n;
      if (changedAscCode > 122) {
        changedAscCode -= 26;
        answer += String.fromCharCode(changedAscCode);
      } else answer += String.fromCharCode(changedAscCode);
    }

    if (65 <= ascCode && ascCode <= 90) {
      let changedAscCode = ascCode + n;
      if (changedAscCode > 90) {
        changedAscCode -= 26;
        answer += String.fromCharCode(changedAscCode);
      } else answer += String.fromCharCode(changedAscCode);
    }
  }

  return answer;
}

console.log(solution("a B z", 4));
