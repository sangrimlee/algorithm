import { minimumCost } from './2144';

describe('LeetCode 2144', () => {
  test('Example 1', () => {
    expect(minimumCost([1, 2, 3])).toBe(5);
  });
  test('Example 2', () => {
    expect(minimumCost([6, 5, 7, 9, 2, 2])).toBe(23);
  });
  test('Example 3', () => {
    expect(minimumCost([5, 5])).toBe(10);
  });
});
