function solution(land) {
  const d = [...new Array(land.length + 4)].map((_) =>
    [...new Array(4)].fill(0)
  );

  for (let i = 1; i <= land.length; i++) {
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        if (j === k) continue;
        d[i][j] = Math.max(d[i - 1][k] + land[i - 1][j], d[i][j]);
      }
    }
  }

  return Math.max(...d[land.length]);
}
