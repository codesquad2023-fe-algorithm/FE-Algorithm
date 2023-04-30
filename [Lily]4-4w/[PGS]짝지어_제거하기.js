function solution(s) {
  const stack = [0]

  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) {
      stack.pop()
      continue
    }

    stack.push(s[i])
  }

  return stack.length === 1 ? 1 : 0
}

solution('baabaa')
// return 1

// 1. 문자열에서 같은 알파벳이 2개 붙어 있는 짝을 찾는다.
// 2. 그 둘을 제거한 뒤, 앞 뒤로 문자열을 이어 붙인다.
// 3. 위 과정을 반복한다.
// 4. 반복 문자열을 모두 제거했다면 짝지어 제거하기가 종료된다.
// 5. 문자열이 모두 제거되면 1, 아니면 0을 리턴한다.

// 문자열이 엄청 작거나 엄청 크거나에 대해서 생각해봐야 한다.
// 문자열이 아예 없을 수도 있다?
