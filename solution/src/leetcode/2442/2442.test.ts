import { countDistinctIntegers } from './2442';

describe('LeetCode 2442', () => {
  test('Example 1', () => {
    expect(countDistinctIntegers([1, 13, 10, 12, 31])).toBe(6);
  });
  test('Example 2', () => {
    expect(countDistinctIntegers([2, 2, 2])).toBe(1);
  });
});
