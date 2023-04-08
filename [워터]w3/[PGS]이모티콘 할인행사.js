const solution = (users, emoticons) => {
  const answer = [0, 0];
  const discount = [10, 20, 30, 40];
  const arr = [];
  const dfs = (emoticons, result) => {
    if (emoticons.length < 1) {
      arr.push(result);
      return;
    }

    for (let i = 0; i < discount.length; i++) {
      dfs(emoticons);
    }
  };
};

console.log(
  solution(
    [
      [40, 10000],
      [25, 10000],
    ],
    [7000, 9000]
  )
);
console.log(
  solution(
    [
      [40, 2900],
      [23, 10000],
      [11, 5200],
      [5, 5900],
      [40, 3100],
      [27, 9200],
      [32, 6900],
    ],
    [1300, 1500, 1600, 4900]
  )
);
