import { evenOddBit } from './leetcode-2595';

describe('2024-03-23: LeetCode 2595', () => {
  test('Example 1', () => {
    expect(evenOddBit(17)).toEqual([2, 0]);
  });
  test('Example 2', () => {
    expect(evenOddBit(2)).toEqual([0, 1]);
  });
});
