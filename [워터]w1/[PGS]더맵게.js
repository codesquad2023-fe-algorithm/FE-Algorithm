const moreSpicy = (scoville, k) => {
  let count = 0;
  let max = 0;
  let i = 0;
  while (scoville.length !== 1) {
    let scovilleSort = scoville.sort((a, b) => a - b);
    max = scovilleSort[i] + [i + 1] * 2;
    if (k > max) {
      scovilleSort.shift();
      scovilleSort[0] = max;
      count += 1;
    } else {
      count += 1;
      return count;
    }
    i += 1;
  }
  if (k > max) return -1;
};

console.log(moreSpicy([1, 2, 3, 9, 10, 12], 7));
console.log(moreSpicy([1, 2, 3], 100));

/*
1. scoville을 오름차순으로 정렬한다.
2. index=0과 index=1을 이용하여 [0]+([1]*2) 계산한다.
(k보다 같거나 크면 중단한다.)
3. 계산하고 난 수 두번째 자리에 넣고 첫번째 자리를 삭제한다.
4. 다시 정렬하는 식으로 반복한다.
5. 만약 k보다 같거나 크지 않으면 1~4를 반 복한다.
6. k이상 만들 수 없다면 -1을 return 한다.
*/
