function checkBracket(string) {
  const container = [];

  const obj = {
    ')': '(',
    '}': '{',
    ']': '[',
  };
  for (let i = 0; i < string.length; i++) {
    const cur = string[i];
    if (container.length === 0) {
      container.push(cur);
      continue;
    }

    container.at(-1) === obj[cur] ? container.pop() : container.push(cur);
  }
  return container.length === 0 ? true : false;
}

function solution(s) {
  let answer = 0;

  for (let j = 0; j < s.length; j++) {
    const str = s.substring(j) + s.substring(0, j);
    checkBracket(str) === true ? (answer += 1) : null;
  }
  return answer;
}
