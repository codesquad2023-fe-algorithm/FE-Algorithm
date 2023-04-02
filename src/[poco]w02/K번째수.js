function solution(array, commands) {
  var answer = [];

  commands.forEach((command) => {
    const [begin, end, index] = command;
    answer.push(array.slice(begin - 1, end).sort((a, b) => a - b)[index - 1]);
  });

  return answer;
}
