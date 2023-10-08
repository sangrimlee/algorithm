import { hammingDistance } from './leetcode-461';

describe('2023-10-08: LeetCode 461', () => {
  test('Example 1', () => {
    expect(hammingDistance(1, 4)).toBe(2);
  });
  test('Example 2', () => {
    expect(hammingDistance(3, 1)).toBe(1);
  });
});
