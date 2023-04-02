function solution(participant, completion) {
  const sortedParticipant = participant.sort();
  const sortedCompletion = completion.sort();

  for (let i = 0; i < sortedParticipant.length; i++) {
    if (sortedParticipant[i] !== sortedCompletion[i]) return sortedParticipant[i];
  }
}
