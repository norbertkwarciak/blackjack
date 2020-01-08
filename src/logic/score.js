export const getScore = cards => {
  const score = cards
    .map(c => c.value)
    .reduce((prev, curr) => prev + curr, 0);

  return score;
}