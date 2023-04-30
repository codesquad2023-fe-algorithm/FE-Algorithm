function solution(t, p) {
  const len = p.length
  let answer = 0

  for (let i = 0; i <= t.length - len; i++) {
    const numbers = t.slice(i, i + p.length)
    if (+numbers <= +p) {
      answer++
    }
  }

  return answer
}

solution('3141592', '271')
// solution('500220839878', '7')
// solution('3141592', '271')
// t	p	result
// "3141592"	"271"	2
// "500220839878"	"7"	8
// "10203"	"15"	3
