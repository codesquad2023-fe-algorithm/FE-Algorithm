const MAX_MONTH = 12;
const MAX_DAY = 28;

const getTotalDays = (year, month, day) => {
  return year * MAX_MONTH * MAX_DAY + month * MAX_DAY + day;
};

const solution = (today, terms, privacies) => {
  const todayTotalDays = getTotalDays(
    ...today.split('.').map((v) => parseInt(v)),
  );
  const termsInfo = new Map();
  terms.forEach((term) => {
    let [category, month] = term.split(' ');
    termsInfo.set(category, parseInt(month));
  });

  return privacies
    .map((privacy, i) => {
      let [collectedDate, category] = privacy.split(' ');
      const collectedTotalDays = getTotalDays(
        ...collectedDate.split('.').map((v) => parseInt(v)),
      );
      const termMonth = termsInfo.get(category);

      if (todayTotalDays >= collectedTotalDays + termMonth * MAX_DAY)
        return i + 1;
      else return false;
    })
    .filter((v) => v);
};
