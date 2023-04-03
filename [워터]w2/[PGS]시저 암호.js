function solution(s, n) {
  return s
    .split("")
    .map((v) => {
      if (v === " ") return v;
      return v.toUpperCase().charCodeAt() + n > 90 ? String.fromCharCode(v.charCodeAt() + n - 26) : String.fromCharCode(v.charCodeAt() + n);
    })
    .join("");
}

/*
1. 각 자리를 배열로 변환한다.
2. 값을 아스키코드로 변환한다.
3. 아스키코드로 변환한 값을 n으로 더한다.
4. 만약 z일 경우 a부터 시작한다.
5. join해서 return 한다.
*/
