import { largestDivisibleSubset } from './leetcode-368';

describe('2024-02-09: LeetCode 368', () => {
  function sortAndCompare(a: number[], b: number[]) {
    a.sort((x, y) => x - y);
    b.sort((x, y) => x - y);
    expect(a).toEqual(b);
  }

  test('Example 1', () => {
    sortAndCompare(largestDivisibleSubset([1, 2, 3]), [1, 2]);
  });
  test('Example 2', () => {
    sortAndCompare(largestDivisibleSubset([1, 2, 4, 8]), [1, 2, 4, 8]);
  });
});
