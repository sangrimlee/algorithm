import { lemonadeChange } from './leetcode-860';

describe('2023-10-30: LeetCode 860', () => {
  test('Example 1', () => {
    expect(lemonadeChange([5, 5, 5, 10, 20])).toBe(true);
  });
  test('Example 2', () => {
    expect(lemonadeChange([5, 5, 10, 10, 20])).toBe(false);
  });
  test('Example 3', () => {
    expect(lemonadeChange([5, 5, 5, 10, 20])).toBe(true);
  });
});
