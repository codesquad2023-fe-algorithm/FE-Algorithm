const solution = (k, m, score) => {
  const sortScore = score.sort((a, b) => b - a);
  const arr = [];
  let result = 0;
  for (let i = 0; i < sortScore.length; i += m) {
    arr.push(sortScore.slice(i, i + m));
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === m) {
      result += arr[i][m - 1] * m;
    }
  }
  return result;
};

// chunk([1, 2, 3, 4], 2) -> [ [1,2], [3,4] ]

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));

/*
1. 내림차순 정렬한다.
2. m만큼 score을 나눈다. 나누었을때 소수점은 다 버린다.
3. 나눈 수 만큼 */
