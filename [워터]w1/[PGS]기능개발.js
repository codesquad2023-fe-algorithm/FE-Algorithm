const solution = (progresses, speeds) => {
  const days = progresses.map((x, i) => Math.ceil((100 - x) / speeds[i]));
  let max = days[0];
  const result = [];
  let count = 1;
  for (let i = 1; i < days.length; i++) {
    if (max >= days[i]) {
      count++;
    } else {
      result.push(count);
      max = days[i];
      count = 1;
    }
  }
  result.push(count);
  return result;
};

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
