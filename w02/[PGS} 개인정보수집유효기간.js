/**
 * 개인정보수집유효기간 / Lv2
 * https://school.programmers.co.kr/learn/courses/30/lessons/150370
 *
 * @param {*} today string - 오늘의 날짜를 의미하는 문자열 "2022.05.19"
 * @param {*} terms array - 약관 유효기간 담은 1차원 문자열 배열 ["A 6", "B 12", "C 3"]
 * @param {*} privacies array - 개인정보를 담은 1차원 문자열 배열 ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
 * @returns array - 파기해야할 개인벙도의 번호 [1, 3]
 */
function solution(today, terms, privacies) {
  const MONTHS = 12;
  const DAYS = 28;
  const [tY, tM, tD] = today.split('.').map(Number);
  const totalDays = (tY * MONTHS * DAYS) + (tM * DAYS) + tD;

  const termsMap = new Map();
  terms.forEach(term => {
    const [kind, expiration] = term.split(' ');
    termsMap.set(kind, Number(expiration));
  });

  const expiryDates= [];
  privacies.forEach((privacy, index) => {
    const [expiryDate, kind] = privacy.split(' ');
    const period = termsMap.get(kind);
    let [year, month, day] = expiryDate.split('.').map(Number);

    if(totalDays >= year * MONTHS * DAYS + (month + period) * DAYS + day) expiryDates.push(index + 1);
  });
  return expiryDates;
}