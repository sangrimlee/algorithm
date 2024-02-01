import { diffWaysToCompute } from './leetcode-241';

describe('2024-02-01: LeetCode 241', () => {
  function sortFn(a: number, b: number) {
    return a - b;
  }
  test('Example 1', () => {
    expect(diffWaysToCompute('2-1-1').sort(sortFn)).toEqual([0, 2]);
  });
  test('Example 2', () => {
    expect(diffWaysToCompute('2*3-4*5').sort(sortFn)).toEqual([-34, -14, -10, -10, 10]);
  });
});
