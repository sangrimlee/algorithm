import { heightChecker } from './1051';

describe('LeetCode 1051', () => {
  test('Example 1', () => {
    expect(heightChecker([1, 1, 4, 2, 1, 3])).toBe(3);
  });
  test('Example 2', () => {
    expect(heightChecker([5, 1, 2, 3, 4])).toBe(5);
  });
  test('Example 3', () => {
    expect(heightChecker([1, 2, 3, 4, 5])).toBe(0);
  });
});
