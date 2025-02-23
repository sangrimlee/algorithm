import { minimumReplacement } from './2366';

describe('LeetCode 2366', () => {
  test('Example 1', () => {
    expect(minimumReplacement([3, 9, 3])).toBe(2);
  });
  test('Example 2', () => {
    expect(minimumReplacement([1, 2, 3, 4, 5])).toBe(0);
  });
});
