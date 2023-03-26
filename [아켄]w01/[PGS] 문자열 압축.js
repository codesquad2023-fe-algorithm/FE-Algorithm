function solution(s) {
  let min = Number.MAX_SAFE_INTEGER;
  let idx = 0;

  for (let unit = 1; unit <= Math.floor(s.length / 2); unit++) {
    let str = '';
    let count = 0;
    let isSame = 0;
    let before = s.slice(idx, idx + unit + 1);

    while (idx < s.length - 2 * unit) {
      let current = s.slice(idx + unit, idx + 2 * unit + 1);
      before = current;
      idx += unit;
      if (before === current && isSame) {
        continue;
      } else if (before === current && !isSame) {
        count++;
        isSame = 1;
      } else str += current;
    }

    const len = count + str.length;
    min = Math.min(min, len);
  }
  return min;
}
