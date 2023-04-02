const solution = (clothes) => {
  let answer = 1;
  let clothesObj = {};
  clothes.forEach((el) => {
    let [clothe, types] = el;
    !clothesObj.hasOwnProperty(types)
      ? (clothesObj[types] = [clothe])
      : clothesObj[types].push(clothe);
  });

  for (property in clothesObj) {
    answer *= clothesObj[property].length + 1;
  }
  return answer - 1;
};
