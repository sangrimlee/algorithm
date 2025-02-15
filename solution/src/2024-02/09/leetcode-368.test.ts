import { largestDivisibleSubset } from './leetcode-368';

describe('2024-02-09: LeetCode 368', () => {
  function sortFn(a: number, b: number) {
    return a - b;
  }
  test('Example 1', () => {
    expect(largestDivisibleSubset([1, 2, 3]).sort(sortFn)).toEqual([1, 2]);
  });
  test('Example 2', () => {
    expect(largestDivisibleSubset([1, 2, 4, 8]).sort(sortFn)).toEqual([1, 2, 4, 8]);
  });
});
