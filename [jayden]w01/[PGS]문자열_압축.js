const compressWords = (words) => {
  let count = 0;
  let compressedWords = [];
  words.reduce((pre, cur, i, arr) => {
    if (pre === cur) {
      count++;
    } else {
      if (count > 0) compressedWords.push(++count);
      compressedWords.push(pre);
      count = 0;
    }

    if (i === arr.length - 1) {
      if (count > 0) compressedWords.push(++count);
      compressedWords.push(cur);
    }
    return cur;
  });
  return compressedWords.join('').length;
};

const solution = (s) => {
  if (s.length === 1) return 1;

  const slicedWords = [];
  slicedWords.push([...s]);

  let temp = [];
  for (let i = 2; i <= Math.floor(s.length / 2); i++) {
    for (let j = 0; j <= Math.floor(s.length / i); j++) {
      temp.push(s.substring(j * i, (j + 1) * i));
    }
    if (temp[temp.length - 1] === '') temp.pop();
    slicedWords.push([...temp]);
    temp = [];
  }
  return Math.min(...slicedWords.map((w) => compressWords(w)));
};
