import { minimumDifference } from './1984';

describe('LeetCode 1984', () => {
  test('Example 1', () => {
    expect(minimumDifference([90], 1)).toBe(0);
  });
  test('Example 2', () => {
    expect(minimumDifference([9, 4, 1, 7], 2)).toBe(2);
  });
});
