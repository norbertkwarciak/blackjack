const countSum = items => items
  .map(i => i.value)
  .reduce((prev, curr) => prev + curr, 0);

const ACE_VALUE_ABOVE_TEN = 11;
const ACE_VALUE_BELOW_AND_EQUAL_TEN = 1;

export const getScore = cards => {
  let score;

  const aces = cards.filter(c => c.label === 'A');
  const restOfCards = cards.filter(c => c.label !== 'A');

  if (countSum(restOfCards) > 10) {
    aces.map(ace => ace.value = ACE_VALUE_ABOVE_TEN);
  } else {
    aces.map(ace => ace.value = ACE_VALUE_BELOW_AND_EQUAL_TEN);
  }

  score = countSum([...aces, ...restOfCards]);
  return score;
}