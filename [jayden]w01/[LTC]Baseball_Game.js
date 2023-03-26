/**
 * @param {string[]} operations
 * @return {number}
 */
const calPoints = function (operations) {
  const stack = [];
  operations.forEach((operation, i) => {
    if (operation === '+') {
      let firstPreviousScore = stack.pop();
      let secondPreviousScore = stack.pop();
      stack.push(secondPreviousScore);
      stack.push(firstPreviousScore);
      stack.push(firstPreviousScore + secondPreviousScore);
    } else if (operation === 'D') {
      let previousScore = stack.pop();
      stack.push(previousScore);
      stack.push(previousScore * 2);
    } else if (operation === 'C') {
      stack.pop();
    } else {
      stack.push(parseInt(operation));
    }
  });
  return stack.reduce((acc, cur) => acc + cur, 0);
};
