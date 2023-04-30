function solution(s) {
  const words = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
  ]

  const str = s.split('')
  let word = ''
  let answer = ''

  for (let i = 0; i < str.length; i++) {
    if (isNaN(str[i])) {
      word += str[i]
    } else {
      answer += str[i]
      continue
    }

    for (let j = 0; j < words.length; j++) {
      if (word === words[j]) {
        answer += j
        word = ''
        break
      }
    }
  }

  return Number(answer)
}

solution('one4seveneight')

// 1. 숫자가 아니어야 한다.
// 2. 숫자이면 탐색하지 않고 바로 answer에 넣는다.

// "one4seveneight"	1478
// "23four5six7"	234567
// "2three45sixseven"	234567
// "123"	123

function solution(s) {
  let numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
  ]

  let answer = s

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i])
    answer = arr.join(i)
  }

  return Number(answer)
}
