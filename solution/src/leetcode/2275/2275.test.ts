import { largestCombination } from './2275';

describe('LeetCode 2275', () => {
  test('Example 1', () => {
    expect(largestCombination([16, 17, 71, 62, 12, 24, 14])).toBe(4);
  });
  test('Example 2', () => {
    expect(largestCombination([8, 8])).toBe(2);
  });
});
