function solution(bridge_length, weight, truck_weights) {
  const dari = [{ t: 1, w: truck_weights[0] }];
  let now = 2;
  let sumWeight = truck_weights[0];
  truck_weights.shift();

  while (dari.length || truck_weights.length) {
    if (dari.length < bridge_length && sumWeight + truck_weights[0] <= weight) {
      dari.push({ t: now, w: truck_weights[0] });
      sumWeight += truck_weights[0];
      truck_weights.shift();
    }

    now++;

    if (now - dari[0].t >= bridge_length) {
      sumWeight -= dari[0].w;

      dari.shift();
    }
  }

  return now;
}
