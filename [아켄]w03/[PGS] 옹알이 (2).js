// 내풀이 -> 통과 실패
function solution(babbling) {
  const words = ["aya", "ye", "woo", "ma"];
  let answer = 0;

  babbling.forEach((bab) => {
    let isPossible = false;
    let p1 = 0;
    let p2 = 0;
    let str = "";
    let beforeStr = "";

    while (p2 < bab.length) {
      str += bab[p2];
      if (words.includes(str)) {
        p1 = p2 + 1;
        p2 = p1;

        if (beforeStr === str) isPossible = false;
        else isPossible = true;

        beforeStr = str;
        str = "";
      } else {
        p2 += 1;
        isPossible = false;
      }
    }

    if (isPossible) answer += 1;
  });

  return answer;
}

// 다른 풀이
function solution(babbling) {
  const words = ["aya", "ye", "woo", "ma"];
  let answer = 0;

  for (let i = 0; i < babbling.length; i++) {
    let str = babbling[i];

    for (let j = 0; j < words; j++) {
      if (str.contains(words[j].repeat(2))) break;

      str = str.split(words[j]).join("");
    }

    if (str.length === 0) answer += 1;
  }

  return answer;
}
