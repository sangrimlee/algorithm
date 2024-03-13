import { captureForts } from './leetcode-2511';

describe('2024-03-13: LeetCode 2511', () => {
  test('Example 1', () => {
    expect(captureForts([1, 0, 0, -1, 0, 0, 0, 0, 1])).toBe(4);
  });
  test('Example 2', () => {
    expect(captureForts([0, 0, 1, -1])).toBe(0);
  });
});
