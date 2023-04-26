function solution(k, tangerine) {
  const m = new Map();

  tangerine.forEach((v) => {
    if (m.has(v)) {
      m.set(v, m.get(v) + 1);
    } else {
      m.set(v, 1);
    }
  });

  let arr = [];
  m.forEach((val) => {
    arr.push(val);
  });

  arr.sort((a, b) => b - a);

  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num += arr[i];
    if (num >= k) return i + 1;
  }
}
