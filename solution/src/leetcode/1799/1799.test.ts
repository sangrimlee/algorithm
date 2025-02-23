import { maxScore } from './1799';

describe('LeetCode 1799', () => {
  test('Example 1', () => {
    expect(maxScore([1, 2])).toBe(1);
  });
  test('Example 2', () => {
    expect(maxScore([3, 4, 6, 8])).toBe(11);
  });
  test('Example 3', () => {
    expect(maxScore([1, 2, 3, 4, 5, 6])).toBe(14);
  });
});
