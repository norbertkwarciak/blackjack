import { getWinner } from './winner';

const PLAYER = {
  score: 18
}

const DEALER = {
  score: 13
}

describe('getWinner function', () => {
  test('should choose player as the winner', () => {
    expect(getWinner(PLAYER, DEALER)).toBe('player');
  });
})
