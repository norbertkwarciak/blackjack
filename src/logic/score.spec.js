import { getScore } from './score';

const CARDS = [
  {value: 8, label: 8, suit: 'spades'},
  {value: 5, label: 5, suit: 'diamonds'},
  {value: 10, label: 'K', suit: 'hearts'}
];

describe('getScore function', () => {
  test('should count the sum of card values', () => {
    expect(getScore(CARDS)).toBe(23);
  });
})
