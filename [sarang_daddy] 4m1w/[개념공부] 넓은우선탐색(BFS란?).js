// 넓이 우선 탐색 (BFS)
// 넓이 우선 탐색이란?
// 레벨 단위로 탐색을 한다. 0레벨 전부 탐색, 1레벨 전부 탐색 ...
// 출발지점에서 한번에 갈수 있는 곳을 확인 (1레벨)
// 1레벨에서 두번만에 갈수 있는 곳을 확인 (2레벨)
// 2레벨에서 세번만에 갈수 있는 곳을 확인 (3레벨)
// 출발지점에서 도착지점으로 가는 "최단 거리를 구하는 탐색" 이다.

// 코드로 개념을 파악해보자.
function solution() {
  let answer = "";
  let queue = [];
  queue.push(1);
  while (queue.length) {
    console.log(queue);
    let v = queue.shift(); // 탐색 종료 노드 제거
    answer += v + " "; // 탐색된 노드 표시
    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv > 7) continue;
      queue.push(nv);
    }
  }
  return answer;
}

console.log(solution());

// 탐색 할 것을 큐에 추가
// 탐색 완료되면 큐에서 제거 (큐에서 제거는 탐색 완료)
// 다음 탐색에 할것에서 탐색 가능한 범위를 큐에 추가
// 반복
// 큐가 비면 탐색 종료
