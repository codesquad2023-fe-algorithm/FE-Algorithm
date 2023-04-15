function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  // 남, 동, 북, 서 => 첫 위치가 (0, 0) 도착해야 할 지점이 (n-1, m-1)이므로 결국 북 -> 남, 서 -> 동으로 이동해야 한다.
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  let answer = 0;
  const checked = [];

  // 첫 번째 요소와 두 번째 요소는 각각 현재 위치의 (row, col)이고
  // 세 번째 요소는 이동 거리이다.
  checked.push([0, 0, 1]);

  // 최단 거리를 구하는 것이므로 bfs로 푸는 것이 유리하다.
  while (checked.length > 0) {
    const [currX, currY, distance] = checked.shift();

    // 현재 위치가 상대방 진영에 도착했다면 distance를 answer에 저장하고 반복문을 끝낸다.
    if (currX === n - 1 && currY === m - 1) {
      answer = distance;
      break;
    }

    // 현재 위치가 상대방 진영이 아니라면 동, 서, 남, 북으로 이동하여 확인한다.
    for (let i = 0; i < 4; i++) {
      let nextX = currX + dx[i]; // 이동했을 때의 행위치
      let nextY = currY + dy[i]; // 이동했을 때의 열위치

      // 만약 이동했을 때의 위치가 maps범위에 벗어나지 않고, 이동한 위치가 벽이 아니라면
      if (
        nextX >= 0 &&
        nextX < n &&
        nextY >= 0 &&
        nextY < m &&
        maps[nextX][nextY] === 1
      ) {
        // 이동한 위치와 거리를 checked에 push한다.
        // 이때 이동 거리는 1이 증가했으므로 distance + 1를 checked에 push한다.
        checked.push([nextX, nextY, distance + 1]);
        // 이동한 위치는 더이상 지나가지 못하도록 0으로 재할당한다.
        maps[nextX][nextY] = 0;
      }
    }
  }

  return answer === 0 ? -1 : answer;
}
