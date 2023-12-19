import { maxRepeating } from './leetcode-1668';

describe('2023-12-18: LeetCode 1668', () => {
  test('Example 1', () => {
    expect(maxRepeating('ababc', 'ab')).toBe(2);
  });
  test('Example 2', () => {
    expect(maxRepeating('ababc', 'ba')).toBe(1);
  });
  test('Example 3', () => {
    expect(maxRepeating('ababc', 'ac')).toBe(0);
  });
});
