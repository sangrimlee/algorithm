import { average } from './leetcode-1491';

describe('2023-05-01: LeetCode 1491', () => {
  test('Example 1', () => {
    expect(average([4000, 3000, 1000, 2000])).toEqual(2500.0);
  });
  test('Example 2', () => {
    expect(average([1000, 2000, 3000])).toEqual(2000.0);
  });
});
