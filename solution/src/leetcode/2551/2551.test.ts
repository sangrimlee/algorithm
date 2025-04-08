import { putMarbles } from './2551';

describe('LeetCode 2551', () => {
  test('Example 1', () => {
    expect(putMarbles([1, 3, 5, 1], 2)).toBe(4);
  });
  test('Example 2', () => {
    expect(putMarbles([1, 3], 2)).toBe(0);
  });
});
