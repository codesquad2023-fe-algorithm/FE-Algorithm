function solution(today, terms, privacies) {
  let answer = [];
  const DAYS = 28;
  const term = {};

  terms.forEach((str) => {
    const [category, num] = str.split(" ");
    term[category] = Number(num);
  });

  privacies.forEach((privacy, i) => {
    const [ty, tm, td] = today.split(".").map((num) => +num);
    let [num, category] = privacy.split(" ");
    let [year, month, date] = num.split(".").map((number) => +number);

    month += term[category];

    const tDays = ty * 12 * DAYS + tm * DAYS + td;
    const pDays = year * 12 * DAYS + month * DAYS + date;

    if (pDays <= tDays) answer.push(i + 1);
  });
  return answer;
}
