import { checkTwoChessboards } from './3274';

describe('LeetCode 3274', () => {
  test('Example 1', () => {
    expect(checkTwoChessboards('a1', 'c3')).toBe(true);
  });
  test('Example 2', () => {
    expect(checkTwoChessboards('a1', 'h3')).toBe(false);
  });
});
