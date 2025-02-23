import { minBitwiseArray } from './3314';

describe('LeetCode 3314', () => {
  test('Example 1', () => {
    expect(minBitwiseArray([2, 3, 5, 7])).toEqual([-1, 1, 4, 3]);
  });
  test('Example 2', () => {
    expect(minBitwiseArray([11, 13, 31])).toEqual([9, 12, 15]);
  });
});
