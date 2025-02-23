import { missingInteger } from './2996';

describe('LeetCode 2996', () => {
  test('Example 1', () => {
    expect(missingInteger([1, 2, 3, 2, 5])).toBe(6);
  });
  test('Example 2', () => {
    expect(missingInteger([3, 4, 5, 1, 12, 14, 13])).toBe(15);
  });
});
