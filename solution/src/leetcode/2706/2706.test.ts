import { buyChoco } from './2706';

describe('LeetCode 2706', () => {
  test('Example 1', () => {
    expect(buyChoco([1, 2, 2], 3)).toBe(0);
  });
  test('Example 2', () => {
    expect(buyChoco([3, 2, 3], 3)).toBe(3);
  });
  test('Example 3', () => {
    expect(buyChoco([98, 54, 6, 34, 66, 63, 52, 39], 62)).toBe(22);
  });
});
