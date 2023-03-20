const solution = (progresses, speeds) => {
  let answer = [];
  let stack = [];
  const publishingDays = progresses.map((progress, i) =>
    Math.ceil((100 - progress) / speeds[i]),
  );

  publishingDays.reduce((pre, cur) => {
    if (pre >= cur) {
      stack.push(cur);
      return pre;
    }
    answer.push(++stack.length);
    stack = [];
    return cur;
  });
  answer.push(++stack.length);
  return answer;
};
