const solution = (answers) => {
  const firstStudent = [1, 2, 3, 4, 5],
    secondStudent = [2, 1, 2, 3, 2, 4, 2, 5],
    thirdStudent = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let firstCount = 0,
    secondCount = 0,
    thirdCount = 0;
  for (let i = 0, j = 0; i < answers.length; i++) {
    if (firstStudent[i % 5] === answers[i]) firstCount += 1;
    if (secondStudent[i % 8] === answers[i]) secondCount += 1;
    if (thirdStudent[i % 10] === answers[i]) thirdCount += 1;
  }
  let max = Math.max(firstCount, secondCount, thirdCount);
  const result = [];
  if (max === firstCount) result.push(1);
  if (max === secondCount) result.push(2);
  if (max === thirdCount) result.push(3);
  return result;
};

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
/*
1. 1번, 2번 , 3번 푸는 수 배열을 만든다.
2.  answers 값과 하나씩 비교한다.
3. answers 반복문이 끝날때까지 돌린다.
4. 만약, answer 문제가 더 많다면, 1번, 2번, 3번은 처음부터 돌린다.
5. 맞을때마다 맞은 수를 각 1번, 2번, 3번 씩 count를 한다.
6. 다 끝난 후 count를 비교해서 더 많이 맞은 사람을 표시하고 동일한 점수면 다 표시한다.
*/
