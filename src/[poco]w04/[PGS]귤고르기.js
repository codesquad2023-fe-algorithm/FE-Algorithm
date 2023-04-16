function solution(k, tangerine) {
  let answer = 0;
  let count = 0;

  const categorizedBySize = {}; // key : 귤의 크기, value : 해당 크기의 귤 개수

  tangerine.forEach((size) => {
    !categorizedBySize[size] ? (categorizedBySize[size] = 1) : (categorizedBySize[size] += 1);
  });

  const entries = Object.entries(categorizedBySize); // 정렬을 위해 배열화
  const sortedEntries = entries.sort((a, b) => b[1] - a[1]); // 해당 크기의 귤 개수 기준으로 내림차순 정렬
  for (let i = 0; i < sortedEntries.length; i++) {
    count += sortedEntries[i][1];

    if (count >= k) {
      return (answer = i + 1);
    }
  }
}
