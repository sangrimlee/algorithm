import { minimumOneBitOperations } from './leetcode-1611';

describe('2023-11-30: LeetCode 1611', () => {
  test('Example 1', () => {
    expect(minimumOneBitOperations(3)).toBe(2);
  });
  test('Example 2', () => {
    expect(minimumOneBitOperations(6)).toBe(4);
  });
});
