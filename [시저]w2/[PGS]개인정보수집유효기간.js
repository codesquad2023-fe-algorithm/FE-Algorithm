const m = new Map();
let t;

function isOutdated(year, month, day, type) {
  const md = m.get(type);
  month += md;
  day -= 1;

  if (month > 12) {
    year += Math.floor(month / 12);
    month = month % 12;
  }
  if (day === 0) {
    month -= 1;
    day = 28;
  }
  if (month === 0) {
    month = 12;
    year -= 1;
  }

  const [ty, tm, td] = t.split(".");

  let tddd = +ty * 12 * 28 + +tm * 28 + +td;
  let nddd = year * 12 * 28 + month * 28 + day;

  return tddd > nddd;
}

function solution(today, terms, privacies) {
  t = today;

  terms.forEach((str) => {
    const [type, len] = str.split(" ");
    m.set(type, Number(len));
  });

  const ans = [];

  privacies.forEach((str, i) => {
    const [date, type] = str.split(" ");
    const [y, m, d] = date.split(".");
    if (isOutdated(Number(y), Number(m), Number(d), type)) {
      ans.push(i + 1);
    }
  });

  return ans;
}
