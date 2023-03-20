function solution(progresses, speeds) {
  let answer = [];
  let max = 0;

  progresses.forEach((progress, i) => {
    const days = Math.ceil((100 - progress) / speeds[i]);
    if (max < days) {
      max = days;
      answer.push(1);
    } else {
      answer[answer.length - 1] += 1;
    }
  });

  return answer;
}
