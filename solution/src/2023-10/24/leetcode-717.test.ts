import { isOneBitCharacter } from './leetcode-717';

describe('2023-10-24: LeetCode 717', () => {
  test('Example 1', () => {
    expect(isOneBitCharacter([1, 0, 0])).toBe(true);
  });
  test('Example 2', () => {
    expect(isOneBitCharacter([1, 1, 1, 0])).toBe(false);
  });
});
