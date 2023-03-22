function solution(s) {
  let ans = 10000000;
  for (let i = 1; i <= s.length; i++) {
    let token = s.slice(0, i);
    let num = 1;
    let subAns = "";
    for (let j = i; j < s.length; j += i) {
      let tmp = s.slice(j, j + i);

      if (token === tmp) {
        num++;
      } else {
        subAns += num === 1 ? token : num + token;
        num = 1;
        token = tmp;
      }
    }
    subAns += num === 1 ? token : num + token;
    ans = Math.min(subAns.length, ans);
  }

  return ans;
}
