import { reductionOperations } from './leetcode-1887';

describe('2023-11-19: LeetCode 1887', () => {
  test('Example 1', () => {
    expect(reductionOperations([5, 1, 3])).toBe(3);
  });
  test('Example 2', () => {
    expect(reductionOperations([1, 1, 1])).toBe(0);
  });
  test('Example 3', () => {
    expect(reductionOperations([1, 1, 2, 2, 3])).toBe(4);
  });
});
