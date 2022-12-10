import { minOperations } from './leetcode-1658';

describe('2022-06-11: LeetCode 1658', () => {
  test('Example 1', () => {
    expect(minOperations([1, 1, 4, 2, 3], 5)).toBe(2);
  });

  test('Example 2', () => {
    expect(minOperations([5, 6, 7, 8, 9], 4)).toBe(-1);
  });

  test('Example 3', () => {
    expect(
      minOperations(
        [
          8828, 9581, 49, 9818, 9974, 9869, 9991, 10000, 10000, 10000, 9999, 9993, 9904, 8819, 1231,
          6309,
        ],
        134365,
      ),
    ).toBe(16);
  });
});
