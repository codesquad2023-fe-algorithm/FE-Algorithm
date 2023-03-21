// https://school.programmers.co.kr/learn/courses/30/lessons/12973?language=javascript

function solution(s) {
  const answer = [];
  for (let i = 0; i < s.length; i++) {
    answer.length === 0 || answer[answer.length - 1] !== s[i] ? answer.push(s[i]) : answer.pop();
  }
  return answer.length === 0 ? 1 : 0;
}

// 문제 설명 및 해결
// 매개변수 s : 알파벳 소문자로 이루어진 문자열

// 매개변수로 주어진 알파벳에서 짝지어진 문자열을 찾아서 제거하고
// 짝지어진 문자열을 제거한 뒤에 다시 짝지어진 문자열 제거를 반복했을 때,
// 최종적으로 문자열이 전부 제거가 가능한지 여부를 확인하는 문제
// 문자열이 전부 제거되는 경우 1을, 그렇지 않은 경우 0을 출력하는 문제

// 주어진 문자열 s를 순회하면서, answer 배열의 길이가 0이거나
// answer 배열의 마지막 요소와 해당 index의 문자열이 다를 경우에는
// answer 배열에 push하고, answer 배열의 마지막 문자열과
// 해당 index의 문자열이 같은 경우 pop을 해서 제거 한다(짝지어진 문자열 제거)
// 최종적으로 answer 배열의 길이가 0인 경우 (문자열이 전부 다 제거된 경우) 1을 return
// answer 배열의 길이가 0이 아닌 경우(제거되지 않은 문자열이 남은 경우) 0을 return
// 시간복잡도 O(n)
