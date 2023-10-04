import { thirdMax } from './leetcode-414';

describe('2023-10-04: LeetCode 414', () => {
  test('Example 1', () => {
    expect(thirdMax([3, 2, 1])).toBe(1);
  });
  test('Example 2', () => {
    expect(thirdMax([1, 2])).toBe(2);
  });
  test('Example 3', () => {
    expect(thirdMax([2, 2, 3, 1])).toBe(1);
  });
});
