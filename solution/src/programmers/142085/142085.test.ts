import { defenseGame } from './142085';

describe('LeetCode 142085', () => {
  test('Example 1', () => {
    expect(defenseGame(7, 3, [4, 2, 4, 5, 3, 3, 1])).toBe(5);
  });
  test('Example 2', () => {
    expect(defenseGame(2, 4, [3, 3, 3, 3])).toBe(4);
  });
});
