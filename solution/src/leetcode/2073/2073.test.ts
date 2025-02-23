import { timeRequiredToBuy } from './2073';

describe('LeetCode 2073', () => {
  test('Example 1', () => {
    expect(timeRequiredToBuy([2, 3, 2], 2)).toBe(6);
  });
  test('Example 2', () => {
    expect(timeRequiredToBuy([5, 1, 1, 1], 0)).toBe(8);
  });
});
