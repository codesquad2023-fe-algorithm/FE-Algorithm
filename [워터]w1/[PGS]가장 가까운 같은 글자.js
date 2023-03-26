const solution = (s) => {
  const result = [];
  const arr = [];
  [...s].map((e, i) => {
    if (!arr.includes(e)) result.push(-1);
    else result.push(i - arr.lastIndexOf(e));
    arr.push(e);
  });
  return result;
};

console.log(solution("banana"));
console.log(solution("foobar"));
/*
문자가 있는 지 확인하기 위해서 문자를 배열로 만들었고, includes를 이용하여 result 배열에 현재 값이 없다면 -1을 그리고 includes를 이용하기 위해서 따로  arr 배열을 만들어서  비교한 값은 저장되게 만들었습니다.
*/
