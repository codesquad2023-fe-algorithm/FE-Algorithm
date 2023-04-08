function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  // 남, 동, 북, 서
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  let answer = 0;
  const checked = [];

  checked.push([0, 0, 1]);

  while (checked.length > 0) {
    const [currX, currY, distance] = checked.shift();

    if (currX === n - 1 && currY === m - 1) {
      answer = distance;
      break;
    }

    for (let i = 0; i < 4; i++) {
      let nextX = currX + dx[i];
      let nextY = currY + dy[i];

      if (
        nextX >= 0 &&
        nextX < n &&
        nextY >= 0 &&
        nextY < m &&
        maps[nextX][nextY] === 1
      ) {
        checked.push([nextX, nextY, distance + 1]);
        maps[nextX][nextY] = 0;
      }
    }
  }

  return answer === 0 ? -1 : answer;
}
