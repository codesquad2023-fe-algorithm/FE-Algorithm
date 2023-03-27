// 문자열이 모두 같은 단위로 잘린다고 생각해서 접근을 잘못 함
// 앞에부터 반복되는 문자열 여부를 체크해야 한다.

function solution (s) {
  for(let i = 2; i <= s.length; i++) {
    if (s.length / i === 1) {
      s += 0
      let count = 1
      let answer = ''
      for(let i = 0; i < s.length - 1; i++) {
        if ( s[i] !== s[i+1]) {
          if(count > 1) {
            answer += count
          }
          count = 1
          answer += s[i]
        } else {
          count += 1
        }
      }

      return answer.length
    }
    // s.length % 2 = 0 
    if (s.length % i === 0) {
      // s.length / 2 = 5
      let step = s.length / i // 5
      let start = 0
      const strs = new Set()
      
      for(let k = 0; k < i; k++) {
        let end = start + step
        // i = 2, j = 0
        strs.add(s.slice(start, end))
        start += step
      }

      if([...strs].length === 1) {
        return `${[...strs][0]}i`.length
      }
    }
  }
}

solution('abcdabcd')