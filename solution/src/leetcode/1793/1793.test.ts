import { maximumScore } from './1793';

describe('LeetCode 1793', () => {
  test('Example 1', () => {
    expect(maximumScore([1, 4, 3, 7, 4, 5], 3)).toBe(15);
  });
  test('Example 2', () => {
    expect(maximumScore([5, 5, 4, 5, 4, 1, 1, 1], 0)).toBe(20);
  });
});
