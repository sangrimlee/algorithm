import { reduce } from './leetcode-2626';

describe('2023-05-10: LeetCode 2626', () => {
  test('Example 1', () => {
    expect(reduce([1, 2, 3, 4], (acc, curr) => acc + curr, 0)).toBe(10);
  });

  test('Example 2', () => {
    expect(reduce([1, 2, 3, 4], (acc, curr) => acc + curr * curr, 0)).toBe(30);
  });

  test('Example 3', () => {
    expect(reduce([], () => 0, 25)).toBe(25);
  });
});
