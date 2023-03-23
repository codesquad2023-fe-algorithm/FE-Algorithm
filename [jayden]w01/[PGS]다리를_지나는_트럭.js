const solution = (bridge_length, weight, truck_weights) => {
  let time = 0;
  const bridgeSpots = new Array(bridge_length).fill(0);
  while (true) {
    time++;
    let totalWeightOnBridge = bridgeSpots.reduce((acc, cur) => acc + cur);
    if (totalWeightOnBridge + truck_weights[0] - bridgeSpots[0] <= weight) {
      bridgeSpots.shift();
      bridgeSpots.push(truck_weights.shift());
    } else {
      bridgeSpots.shift();
      bridgeSpots.push(0);
    }
    totalWeightOnBridge = bridgeSpots.reduce((acc, cur) => acc + cur);
    if (totalWeightOnBridge === 0) break;
  }
  return time;
};
