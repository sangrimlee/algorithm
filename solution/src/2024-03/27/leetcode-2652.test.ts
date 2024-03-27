import { sumOfMultiples } from './leetcode-2652';

describe('2024-03-27: LeetCode 2652', () => {
  test('Example 1', () => {
    expect(sumOfMultiples(7)).toBe(21);
  });
  test('Example 2', () => {
    expect(sumOfMultiples(10)).toBe(40);
  });
  test('Example 3', () => {
    expect(sumOfMultiples(9)).toBe(30);
  });
});
