function solution(progresses, speeds) {
  const arr = [];

  for (let i = 0; i < speeds.length; i++) {
    let temp = Math.floor((100 - progresses[i]) / speeds[i]);
    if ((100 - progresses[i]) % speeds[i] !== 0) temp++;

    arr.push(temp);
  }

  const ans = [];
  let d = arr[0];
  let num = 1;
  for (let i = 1; i < speeds.length; i++) {
    if (arr[i] <= d) {
      num++;
    } else {
      ans.push(num);
      d = arr[i];
      num = 1;
    }
  }
  ans.push(num);

  return ans;
}
