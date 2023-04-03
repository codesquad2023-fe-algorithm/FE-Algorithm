const solution = (s) => {
  let result = 0;
  let brackets = [...s];
  const bracketPartner = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  for (let i = 0; i < s.length; i++) {
    const stack = [];
    brackets.forEach((bracket) => {
      if (bracket in bracketPartner) {
        stack.push(bracket);
      } else {
        let recentBracket = stack.pop();
        if (bracketPartner[recentBracket] !== bracket) {
          stack.push(recentBracket);
        }
      }
    });
    result += !stack.length;
    brackets.push(brackets.shift());
  }
  return result;
};
