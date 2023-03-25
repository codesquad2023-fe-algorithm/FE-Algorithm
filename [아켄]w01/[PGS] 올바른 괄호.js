function solution(s) {
  const stringStack = [];

  if (s[0] === ')') return false;

  stringStack.push(s[0]);

  for (let i = 1; i < s.length; i++) {
    if (s[i] === '(') {
      stringStack.push('(');
    } else {
      const lastStr = stringStack[stringStack.length - 1];

      if (stringStack.length === 0) return false;
      else stringStack.pop();
    }
  }

  return stringStack.length === 0;
}
