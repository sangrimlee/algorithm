import { canMakeArithmeticProgression } from './leetcode-1502';

describe('2023-06-06: LeetCode 1502', () => {
  test('Example 1', () => {
    expect(canMakeArithmeticProgression([3, 5, 1])).toBeTruthy();
  });
  test('Example 2', () => {
    expect(canMakeArithmeticProgression([1, 2, 4])).toBeFalsy();
  });
});
