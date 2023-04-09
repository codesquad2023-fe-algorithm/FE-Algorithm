function solution(numbers, target) {
  let ans = 0;

  function recursion(sum, num) {
    if (num === numbers.length) {
      if (sum === target) ++ans;
      return;
    }

    recursion(sum + numbers[num], num + 1);
    recursion(sum - numbers[num], num + 1);
  }

  recursion(0, 0);

  return ans;
}
