import { distMoney } from './leetcode-2591';

describe('2024-03-22: LeetCode 2591', () => {
  test('Example 1', () => {
    expect(distMoney(20, 3)).toBe(1);
  });
  test('Example 2', () => {
    expect(distMoney(16, 2)).toBe(2);
  });
  test('Example 3', () => {
    expect(distMoney(17, 3)).toBe(2);
  });
});
