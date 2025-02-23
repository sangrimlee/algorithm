import { canFormArray } from './1640';

describe('LeetCode 1640', () => {
  test('Example 1', () => {
    expect(canFormArray([15, 88], [[88], [15]])).toBe(true);
  });
  test('Example 2', () => {
    expect(canFormArray([49, 18, 16], [[16, 18, 49]])).toBe(false);
  });
  test('Example 3', () => {
    expect(canFormArray([91, 4, 64, 78], [[78], [4, 64], [91]])).toBe(true);
  });
});
