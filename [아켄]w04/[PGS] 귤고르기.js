function solution(k, tangerine) {
  const types = {};
  let total = k;
  let answer = 0;

  // 귤 개수 세기
  tangerine.forEach((type) => {
    // types에 type이 존재한다면 +1, 존재하지 않으면 1
    if (types[type]) types[type] += 1;
    else types[type] = 1;
  });

  // 어떤 type인지는 중요하지 않으니 갯수만 있는 배열을 오름차순으로 정렬
  const count = Object.values(types).sort((a, b) => a - b);

  while (k > 0) {
    // 가장 마지막에 있는 요소가 count 중 가장 큰 값[ㅑㅐ
    const cnt = count.pop();
    if (cnt > total) {
      answer++;
      break;
    }
    k -= cnt;
    answer++;
  }

  return answer;
}
