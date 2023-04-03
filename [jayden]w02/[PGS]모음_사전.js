const solution = (word) => {
  const upperVowels = ['A', 'E', 'I', 'O', 'U'];
  const addingValues = [781, 156, 31, 6, 1];
  return [...word].reduce((acc, cur, index) => {
    return acc + addingValues[index] * upperVowels.indexOf(cur) + 1;
  }, 0);
};
