import { rearrangeArray } from './2149';

describe('LeetCode 2149', () => {
  test('Example 1', () => {
    expect(rearrangeArray([3, 1, -2, -5, 2, -4])).toEqual([3, -2, 1, -5, 2, -4]);
  });
  test('Example 2', () => {
    expect(rearrangeArray([-1, 1])).toEqual([1, -1]);
  });
});
