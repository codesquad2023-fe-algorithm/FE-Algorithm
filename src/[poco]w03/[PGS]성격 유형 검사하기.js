function solution(survey, choices) {
  const count = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  const type = ['RT', 'CF', 'JM', 'AN'];

  survey.forEach((v, i) => {
    const [firstType, secondType] = v.split('');

    if (choices[i] < 4) {
      count[firstType] += 4 - choices[i];
    }

    if (choices[i] > 4) {
      count[secondType] += choices[i] - 4;
    }
  });
  return type.reduce((acc, cur) => {
    const [firstType, secondType] = cur.split('');
    return (acc += count[secondType] > count[firstType] ? secondType : firstType);
  }, '');
}
