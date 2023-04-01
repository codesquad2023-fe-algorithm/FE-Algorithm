function solution(food) {
  let answer = "";
  let half = "";

  food.forEach((e, i) => {
    if (i === 0) return;
    half += String(i).repeat(Math.floor(e / 2));
  });
  answer += half;
  const reversedHalf = half
    .split("")
    .reverse((a, b) => a - b)
    .join("");
  answer += "0" + reversedHalf;
  return answer;
}
