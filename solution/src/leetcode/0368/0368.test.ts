import { largestDivisibleSubset } from './0368';

describe('LeetCode 0368', () => {
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
