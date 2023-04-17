// 모든 명함을 수납 가능하고
// 최대한 작은 지갑을 만들어야 한다.
// 큰 길이 중 가장 큰 길이
// 작은 길이 중 가장 큰 길이

function solution(sizes) {
  let answer = 0;
  let finalMax = Number.MIN_SAFE_INTEGER;
  let finalMin = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < sizes.length; i++) {
    let max = Math.max(sizes[i][0], sizes[i][1]);
    let min = Math.min(sizes[i][0], sizes[i][1]);
    finalMax = Math.max(finalMax, max);
    finalMin = Math.max(finalMin, min);
    answer = finalMax * finalMin;
  }

  return answer;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
// 4000

// console.log(
//   solution([
//     [10, 7],
//     [12, 3],
//     [8, 15],
//     [14, 7],
//     [5, 15],
//   ])
// );
// // 120

// console.log(
//   solution([
//     [14, 4],
//     [19, 6],
//     [6, 16],
//     [18, 7],
//     [7, 11],
//   ])
// );
// // 133
