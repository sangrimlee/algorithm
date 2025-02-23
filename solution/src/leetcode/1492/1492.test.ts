import { kthFactor } from './1492';

describe('LeetCode 1492', () => {
  test('Example 1', () => {
    expect(kthFactor(12, 3)).toBe(3);
  });
  test('Example 2', () => {
    expect(kthFactor(7, 2)).toBe(7);
  });
  test('Example 3', () => {
    expect(kthFactor(4, 4)).toBe(-1);
  });
});
