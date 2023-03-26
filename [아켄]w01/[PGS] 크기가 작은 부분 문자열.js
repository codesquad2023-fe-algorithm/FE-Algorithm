function solution(t, p) {
  const count = t.length - p.length + 1;
  const unit = p.length - 1;
  const nums = [];
  let answer = 0;
  
  for(let i = 0; i < count; i++) {
      nums.push(t.split('').slice(i, i + unit + 1).join(''));
  }
  
  return nums.filter((num) => Number(num) <= Number(p)).length;
}