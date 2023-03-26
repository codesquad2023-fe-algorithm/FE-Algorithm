function solution(s) {
  const st = [];
  [...s].forEach((c) => {
    if (st.length > 0 && st[st.length - 1] === c) {
      st.pop();
    } else {
      st.push(c);
    }
  });

  return st.length === 0 ? 1 : 0;
}
