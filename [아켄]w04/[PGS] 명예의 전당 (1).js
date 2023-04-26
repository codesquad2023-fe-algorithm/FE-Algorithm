function solution(k, score) {
  const answer = [];
  const bestScore = [];
  
  for(let i = 0; i < score.length ; i++) {
      bestScore.push(score[i]);
      bestScore.sort((a,b) => b-a);
      if(bestScore.length < k) answer.push(bestScore[bestScore.length - 1]);
      else answer.push(bestScore[k-1]);      
  }    
  
  return answer;
