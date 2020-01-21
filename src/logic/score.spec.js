import { getScore } from './score';

const CARDS = [
  {value: 11, label: 'A', suit: 'spades'},
  {value: 10, label: 'K', suit: 'diamonds'},
  {value: 4, label: 4, suit: 'hearts'}
];

describe('getScore function', () => {
  test('should count the sum of card values', () => {
    expect(getScore(CARDS)).toBe(25);
  });
})
