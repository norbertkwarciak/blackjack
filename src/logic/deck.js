const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'D', 'K', 'A'];
const suits = ['diamonds', 'spades', 'hearts', 'clubs'];

const getFigureValue = value => {
  if (value === 'A')
    return 11;
  else if (value === 'J' || value === 'D' || value === 'K')
    return 10;
  else return value;
}

export const getDeck = () => {
  const deck = values.map(v => {
    return suits.map(s => ({value: getFigureValue(v), label: v, suit: s}));
  })

  return deck.reduce((a, b) => a.concat(b), []);
}
