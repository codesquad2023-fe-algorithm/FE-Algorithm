solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right')
// right
// "LRLLLRLLRRL"

function solution(numbers, hand) {
  var answer = ''
  const left = [1, 4, 7]
  const right = [3, 6, 9]
  let leftPosition = 0
  let rightPosition = 0
  
  numbers.forEach(number => {
    if (left.includes(number)) {
      leftPosition = number
      answer += 'L'
      return
    }
    
    if (right.includes(number)) {
      rightPosition = number
      answer += 'R'
      return
    }
  
    const diffLeft = Math.abs(number - leftPosition)
    const diffRight = Math.abs(number - rightPosition)
    
    if (diffLeft < diffRight) {
      answer += 'L'
      leftPosition = number
    } else if (diffLeft > diffRight) {
      answer += 'R'
      rightPosition = number
    } else {
      answer += hand === 'right' ? 'R' : 'L'
    }  
  })

  return answer
}