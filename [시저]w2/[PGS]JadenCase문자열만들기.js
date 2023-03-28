function solution(s) {
  return s
    .split(" ")
    .map((word) => {
      return word.length === 0
        ? ""
        : word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}
