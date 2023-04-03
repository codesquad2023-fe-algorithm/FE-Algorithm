const solution = (s, n) => {
  return [...s]
    .map((word, index) => {
      if (word === ' ') return ' ';
      let code = word.charCodeAt(0);
      const UPPER_CODE_MAX = 90;
      const LOWER_CODE_MAX = 122;
      if (code <= UPPER_CODE_MAX) {
        if (code + n <= UPPER_CODE_MAX) {
          code += n;
        } else {
          code += n - 26;
        }
      } else {
        if (code + n <= LOWER_CODE_MAX) {
          code += n;
        } else {
          code += n - 26;
        }
      }
      return String.fromCharCode(code);
    })
    .join('');
};
