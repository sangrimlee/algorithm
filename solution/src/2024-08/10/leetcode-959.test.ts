import { regionsBySlashes } from './leetcode-959';

describe('2024-08-10: LeetCode 959', () => {
  test('Example 1', () => {
    expect(regionsBySlashes([' /', '/ '])).toBe(2);
  });
  test('Example 2', () => {
    expect(regionsBySlashes([' /', '  '])).toBe(1);
  });
  test('Example 3', () => {
    expect(regionsBySlashes(['/\\', '\\/'])).toBe(5);
  });
});
