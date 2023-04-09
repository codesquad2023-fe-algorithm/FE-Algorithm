function solution(maps) {
  let visitQ = [[0, 0]];

  const dir = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]; //위, 오, 아, 왼
  const row = maps.length;
  const col = maps[0].length;

  maps[0][0] += 1; //시작위치에 방문했다는 표시로 +1 증가시킴

  while (visitQ.length) {
    const [x, y] = visitQ.shift();

    for (let i = 0; i < dir.length; i++) {
      let mx = x + dir[i][0];
      let my = y + dir[i][1];
      //다음 방향으로 넘어감

      if (mx >= 0 && my >= 0 && mx < row && my < col && maps[mx][my] === 1) {
        visitQ.push([mx, my]);
        maps[mx][my] = maps[x][y] + 1;
      }
    }
  }
  return maps[row - 1][col - 1] === 1 ? -1 : maps[row - 1][col - 1] - 1;
}
