function solution(s) {
  let stackCount = 0;

  for (i = 0; i < s.length; i++) {
    const char = s[i];
    stackCount += char === '(' ? 1 : -1;
    if (stackCount === -1) return false;
  }

  return stackCount === 0 ? true : false;
}
