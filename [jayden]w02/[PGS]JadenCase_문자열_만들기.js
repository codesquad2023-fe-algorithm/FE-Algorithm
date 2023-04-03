const solution = (s) => {
  return s.split(' ').map(word => {
    if (word[0] === undefined) return
    return word[0].toUpperCase() + word.substring(1, word.length).toLowerCase()
  }).join(' ')
};
