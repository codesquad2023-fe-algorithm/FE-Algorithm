function solution(sizes) {
  const large = [];
  const small = [];

  sizes.forEach((card) => {
    const [width, height] = card;
    width >= height
      ? (large.push(width), small.push(height))
      : (large.push(height), small.push(width));
  });
  return Math.max(...large) * Math.max(...small);
}
