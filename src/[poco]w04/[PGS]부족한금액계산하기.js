function solution(price, money, count) {
  let totalCount = 0;

  for (let i = 1; i <= count; i++) {
    totalCount += price * i;
  }

  const answer = totalCount - money;

  return answer < 0 ? 0 : answer;
}
