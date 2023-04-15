function solution(maps) {
  const row = maps.length;
  const col = maps[0].length;

  const arr = Array.from({ length: row }, () =>
    Array.from({ length: col }, () => 0)
  );

  const dy = [-1, 0, 1, 0];
  const dx = [0, -1, 0, 1];

  const q = [];
  arr[0][0] = 1;
  q.push([0, 0]);

  while (q.length) {
    const [y, x] = q.shift();
    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      if (ny >= row || ny < 0 || nx >= col || nx < 0) continue;
      if (arr[ny][nx]) continue;
      if (!maps[ny][nx]) continue;

      q.push([ny, nx]);
      arr[ny][nx] = arr[y][x] + 1;
    }
  }

  if (!arr[row - 1][col - 1]) return -1;
  return arr[row - 1][col - 1];
}
