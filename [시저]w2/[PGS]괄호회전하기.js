function solution(s) {
  let ss = s + s;

  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    let str = ss.slice(i, s.length + i);

    let st = [];

    let flag = true;
    for (let j = 0; j < str.length; j++) {
      const c = str[j];
      if (c === "(") {
        st.push(1);
      } else if (c === "[") {
        st.push(2);
      } else if (c === "{") {
        st.push(3);
      } else if (c === ")") {
        if (st.length === 0 || st[st.length - 1] !== 1) {
          flag = false;
          break;
        } else {
          st.pop();
        }
      } else if (c === "]") {
        if (st.length === 0 || st[st.length - 1] !== 2) {
          flag = false;
          break;
        } else {
          st.pop();
        }
      } else if (c === "}") {
        if (st.length === 0 || st[st.length - 1] !== 3) {
          flag = false;
          break;
        } else {
          st.pop();
        }
      }
    }

    if (flag && st.length === 0) {
      ++ans;
    }
  }

  return ans;
}
