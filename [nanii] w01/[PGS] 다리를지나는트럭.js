/**
 * [PGS] 다리를 지나는 트럭 / Lv2
 * https://school.programmers.co.kr/learn/courses/30/lessons/42583
 *
 * @param {*} bridge_length number
 * @param {*} weight number
 * @param {*} truck_weights array
 * @returns number
 */
function solution(bridge_length, weight, truck_weights) {
  const bridgeQ = Array(bridge_length).fill(0);
  let currentWeight = 0;
  let time = 0;

  while(truck_weights.length > 0) {
    time ++;
    currentWeight -= bridgeQ.shift();
    let curTruck = truck_weights.at(-1);

    if(currentWeight + curTruck > weight) bridgeQ.push(0);
    else {
      curTruck = truck_weights.pop();
      bridgeQ.push(curTruck);
      currentWeight += curTruck;
    };
  }
  return time + bridge_length;
}