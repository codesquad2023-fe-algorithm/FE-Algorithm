/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  const answer = [];

  for (let i = 0; i < operations.length; i++) {
    const operation = operations[i];
    if (Number.isInteger(Number(operation))) {
      answer.push(Number(operation));
      continue;
    } else if (operation === 'C') {
      answer.pop();
      continue;
    } else if (operation === 'D') {
      answer.push(answer.at(-1) * 2);
      continue;
    } else if (operation === '+') {
      answer.push(answer.at(-1) + answer.at(-2));
    }
  }

  return answer.reduce((prev, curr) => prev + curr, 0);
};
