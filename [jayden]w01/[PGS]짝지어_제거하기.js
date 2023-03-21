const solution = (s) => {
  const stack = [];
  const temp = [...s];
  for (const word of temp) {
    const stackLastWord = stack.pop();
    if (word !== stackLastWord) {
      if (stackLastWord !== undefined) stack.push(stackLastWord);
      stack.push(word);
    }
  }

  return stack.length ? 0 : 1;
};
