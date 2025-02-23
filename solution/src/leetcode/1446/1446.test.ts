import { maxPower } from './1446';

describe('LeetCode 1446', () => {
  test('Example 1', () => {
    expect(maxPower('leetcode')).toBe(2);
  });
  test('Example 2', () => {
    expect(maxPower('abbcccddddeeeeedcba')).toBe(5);
  });
});
