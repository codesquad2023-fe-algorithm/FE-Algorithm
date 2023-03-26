// https://school.programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
  const answer = [];
  let count = [];

  const days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
  let maxDay = days[0];

  for (let i = 0; i < days.length; i++) {
    if (count.length === 0) {
      count.push(1);
      continue;
    }

    days[i] <= maxDay
      ? (count[0] += 1)
      : (answer.push(count.shift()), count.push(1), (maxDay = days[i]));
  }
  answer.push(count.shift());
  return answer;
}

// 인자로 들어온 값 변경 금지

// 문제 설명 및 해결
// progresses : 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열
// speeds : 각 작업의 개발 속도가 적힌 정수 배열
// 각 배포마다 몇개의 기능이 배포되는지 기능의 개수가 적힌 배열 return 하는 문제
// 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있지만,
// 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포된다.

// map 매서드를 사용해서 각 작업이 완료될때까지 필요한 날들을 배열(days)로 만들고,
// 작업은 순서대로 완료되어야 하기 때문에, days 배열의 0번째 값을 maxDay 변수에 할당
// days 배열을 순회하면서 0번째 index의 값(count.length === 0)일 때는 count 배열에 1을 push
// days 배열의 다음 index의 값부터 maxDay와 비교하면서, maxDay 값보다 작거나 같은 경우(앞선 작업이 끝나야 배포되는 경우)에는,
// count[0]의 값을 1 더해주었다.(완료되는 작업의 개수 더하기)
// 만약 maxDay 값보다 큰 경우에는, 해당 index의 값을 maxDay에 재할당하고 앞선 작업보다 나중에 완료되는 작업이기 때문에,
// count[0]의 값을 shift() 및 answer에 push하고 count에 새로운 작업 개수 1을 push
// days 배열 전체 순회 이후에 count.shift() 값을 answer에 push 해주기(

// 고민했던 부분
// 처음에 동일한 날짜에 작업이 완료되는 경우를 고려하지 못하고, for문 내부의 조건에서 제외를 했고,
// test 1,2,4,5 에서 통과를 하지 못했다.
// 동일한 날짜에 작업이 완료되는 경우에는 결국 앞선 작업과 동시에 끝나는 작업으로 판단해야되기 때문에
// maxDay보다 작은 경우와 동일하게 처리해주었다.
