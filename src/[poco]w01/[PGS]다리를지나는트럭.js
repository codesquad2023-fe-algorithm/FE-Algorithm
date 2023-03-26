function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let trucks = truck_weights;
  let maxWeight = weight;
  let currentWeight = 0;
  let bridgeQueue = Array.from({ length: bridge_length }, () => 0);

  // 처음 시작시에는 현재 무게가 0이기 때문에, 첫번째 트럭을 다리 위에
  // 올리고 시작한다. 시간은 1초 경과, 최대 하중에서 첫번째 트럭의 무게를 빼주고
  // 현재 하중에서 트럭의 무게를 더해주고, 다리 위에 첫번째 트럭을 push
  answer += 1;
  currentWeight += trucks[0];
  maxWeight -= trucks[0];
  bridgeQueue.shift();
  bridgeQueue.push(trucks.shift());

  // 현재 하중에 0보다 클 경우, 반복해서 시행
  while (currentWeight > 0 || trucks.length > 0) {
    let nextTruck = trucks[0];
    let finish = bridgeQueue[0];

    answer += 1;
    maxWeight += finish;
    currentWeight -= finish;
    bridgeQueue.shift();

    // 최대 하중이 현재 다리의 하중과 새로운 트럭보다 크고, 새로운 트럭이 남아있을 때
    // 최대 하중에서 새로운 트럭만큼의 무게를 빼주고
    // 현재 무게에 새로운 트럭만큼의 무게를 더해준다
    if (maxWeight >= nextTruck) {
      maxWeight -= nextTruck;
      currentWeight += nextTruck;
      bridgeQueue.push(trucks.shift());
    } else {
      bridgeQueue.push(0);
    }
  }

  return answer;
}
