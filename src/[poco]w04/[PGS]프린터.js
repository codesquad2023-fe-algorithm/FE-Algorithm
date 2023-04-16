function solution(priorities, location) {
  let count = 0;

  while (true) {
    let max = Math.max(...priorities);
    let referenceValue = priorities.shift();
    if (referenceValue === max) {
      count += 1;
      if (location === 0) break;
    } else if (referenceValue !== max) {
      priorities.push(referenceValue);
    }
    location -= 1;
    if (location < 0) location = priorities.length - 1;
  }
  return count;
}
