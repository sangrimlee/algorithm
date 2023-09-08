import { generate } from './leetcode-118';

describe('2023-09-08: LeetCode 118', () => {
  test('Example 1', () => {
    expect(generate(5)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
  });
  test('Example 2', () => {
    expect(generate(1)).toEqual([[1]]);
  });
});
