import { canMakeArithmeticProgression } from './1502';

describe('LeetCode 1502', () => {
  test('Example 1', () => {
    expect(canMakeArithmeticProgression([3, 5, 1])).toBeTruthy();
  });
  test('Example 2', () => {
    expect(canMakeArithmeticProgression([1, 2, 4])).toBeFalsy();
  });
});
