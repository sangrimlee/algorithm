import { countBattleships } from './0419';

describe('LeetCode 0419', () => {
  test('Example 1', () => {
    expect(
      countBattleships([
        ['X', '.', '.', 'X'],
        ['.', '.', '.', 'X'],
        ['.', '.', '.', 'X'],
      ]),
    ).toBe(2);
  });
  test('Example 2', () => {
    expect(countBattleships([['.']])).toBe(0);
  });
});
