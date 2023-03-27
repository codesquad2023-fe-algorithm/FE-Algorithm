// 26

// 65 - 90 : A - Z
// 97 - 122 : a - z
function solution(s, n) {
  const askiiCode = s.split('').map(str => {
    if (str === ' ') return ' '
    return str.charCodeAt(0)
  })

  const newAskiiCode = askiiCode.map(code => {
    if (code === ' ') return ' '
    const newCode = code + n
    if (code <= 90 && newCode > 90 || newCode > 122) {
      return newCode - 26
    }
    return newCode
  })

  const newStr = newAskiiCode.map(code => {
    if (code === ' ') return ' '
    return String.fromCharCode(code)
  })

  const answer = newStr.join('')
  console.log(answer);
  return answer
}

solution("a z Z", 25)