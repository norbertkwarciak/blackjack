const countSum = items => items
  .map(i => i.value)
  .reduce((prev, curr) => prev + curr, 0);

const FIRST_ACE_VALUE = 11;
const OTHER_ACE_VALUE = 1;

export const getScore = cards => {
  let score;
  const aces = cards.filter(c => c.label === 'A');

  if (aces.length > 1) {
    const [firstAce, ...restOfAces] = aces;
    firstAce.value = FIRST_ACE_VALUE;
    restOfAces.map(ace => ace.value = OTHER_ACE_VALUE);

    const updatedCards = cards.every(c => c.label === 'A')
      ? [firstAce, ...restOfAces]
      : [firstAce, ...restOfAces, ...cards.filter(c => c.label !== 'A')];

    score = countSum(updatedCards);
  } else score = countSum(cards);

  return score;
}