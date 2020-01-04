const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const suits = ['♦','♣','♥','♠'];

export const getDeck = () => {
  const deck = values.map(v => {
    return suits.map(s => ({value: v, suit: s}))
  })

  return deck.reduce((a, b) => a.concat(b), []);
}
