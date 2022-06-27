import { minPartitions } from './leetcode-1689';

describe('2022-06-27: LeetCode 1689', () => {
  test('Example 1', () => {
    expect(minPartitions('32')).toBe(3);
  });

  test('Example 2', () => {
    expect(minPartitions('82734')).toBe(8);
  });

  test('Example 3', () => {
    expect(minPartitions('27346209830709182346')).toBe(9);
  });
});
