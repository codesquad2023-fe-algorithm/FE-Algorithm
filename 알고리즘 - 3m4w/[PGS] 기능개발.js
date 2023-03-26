function solution(progresses, speeds) {
  let answer = [];

  // 각 작업은 배포까지 몇일이 걸리는가?
  const queue = [];

  progresses.forEach((workload, i) => {
    const endCount = Math.ceil((100 - workload) / speeds[i]);
    queue.push(endCount);
  });

  // 첫번째 작업이 0이 되는 값만큼 모든 작업에 - 해준다.
  while (queue.length > 0) {
    const minusCount = queue[0];
    for (let i = 0; i < queue.length; i++) {
      queue[i] -= minusCount;
    }

    if (queue[0] === 0) {
      let releaseCount = 0;
      while (queue[1] <= 0) {
        releaseCount++;
        queue.shift();
      }
      releaseCount++;
      answer.push(releaseCount);
      queue.shift();
    }
  }

  return answer;
}

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
