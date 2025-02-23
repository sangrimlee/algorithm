import { checkArithmeticSubarrays } from './1630';

describe('LeetCode 1630', () => {
  test('Example 1', () => {
    expect(checkArithmeticSubarrays([4, 6, 5, 9, 3, 7], [0, 0, 2], [2, 3, 5])).toEqual([
      true,
      false,
      true,
    ]);
  });
  test('Example 2', () => {
    expect(
      checkArithmeticSubarrays(
        [-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10],
        [0, 1, 6, 4, 8, 7],
        [4, 4, 9, 7, 9, 10],
      ),
    ).toEqual([false, true, false, false, true, true]);
  });
});
