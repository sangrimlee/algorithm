import { productExceptSelf } from './leetcode-238';

describe('2023-07-15: LeetCode 238', () => {
  const negZeroToZero = (num: number) => (Object.is(num, -0) ? 0 : num);
  test('Example 1', () => {
    expect(productExceptSelf([1, 2, 3, 4]).map(negZeroToZero)).toEqual([24, 12, 8, 6]);
  });
  test('Example 2', () => {
    expect(productExceptSelf([-1, 1, 0, -3, 3]).map(negZeroToZero)).toEqual([0, 0, 9, 0, 0]);
  });
});
