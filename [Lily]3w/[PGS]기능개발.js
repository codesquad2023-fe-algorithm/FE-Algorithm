function solution(progresses, speeds) {
  const remaingDays = progresses.map((progress, i) => 
    Math.ceil((100 - progress) / speeds[i]))
 
  const deploiedProgresses = []
  let thisTurnDeploy = 0
  let finishProgresses = 0
  for(let i = 0; i < remaingDays.length; i++) {
    const proceedDays = remaingDays[i]
    if (i !== 0) {
      if (proceedDays === 0) {
        thisTurnDeploy++
         finishProgresses ++
         continue
       } else {
         deploiedProgresses.push(thisTurnDeploy)
         thisTurnDeploy = 0
       }
    }
    for(let j = finishProgresses; j < remaingDays.length; j++) {
      remaingDays[j] = Math.max((remaingDays[j] - proceedDays), 0)
    }
    finishProgresses++
    thisTurnDeploy++
  }

  deploiedProgresses.push(thisTurnDeploy)

  return deploiedProgresses
}
