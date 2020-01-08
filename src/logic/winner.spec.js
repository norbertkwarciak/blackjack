import { getWinner } from './winner';

const PLAYER = {
  cards: [
    {value: 8, label: 8, suit: 'spades'},
    {value: 10, label: 'K', suit: 'hearts'}
  ],
  score: 18
}

const DEALER = {
  cards: [
    {value: 2, label: 2, suit: 'spades'},
    {value: 11, label: 'A', suit: 'diamonds'}
  ],
  score: 13
}

describe('getWinner function', () => {
  test('should choose player as the winner', () => {
    expect(getWinner(PLAYER, DEALER)).toBe('player');
  });
})
