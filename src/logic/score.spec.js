import { getScore } from './score';

const CARDS = [
  {value: 11, label: 'A', suit: 'spades'},
  {value: 1, label: 'A', suit: 'diamonds'},
  {value: 5, label: 5, suit: 'hearts'}
];

describe('getScore function', () => {
  test('should count the sum of card values', () => {
    expect(getScore(CARDS)).toBe(17);
  });
})
