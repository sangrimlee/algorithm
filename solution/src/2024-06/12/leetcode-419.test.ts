import { countBattleships } from './leetcode-419';

describe('2024-06-12: LeetCode 419', () => {
  test('Example 1', () => {
    expect(
      countBattleships([
        ['X', '.', '.', 'X'],
        ['.', '.', '.', 'X'],
        ['.', '.', '.', 'X'],
      ]),
    ).toEqual(2);
  });
  test('Example 2', () => {
    expect(countBattleships([['.']])).toEqual(0);
  });
});
