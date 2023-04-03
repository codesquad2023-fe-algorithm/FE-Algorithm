// arr = 0~9 로 이루어짐
// 연속적으로 나타나는 숫자는 하나만 남김
// 반환 arr 원소 순서 유지해야함

function solution(arr) {
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) answer.push(arr[i]);
  }

  return answer;
}

console.log(solution([4, 4, 3, 3, 3]));
