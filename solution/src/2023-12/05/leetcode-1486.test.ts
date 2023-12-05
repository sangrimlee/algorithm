import { xorOperation } from './leetcode-1486';

describe('2023-12-05: LeetCode 1486', () => {
  test('Example 1', () => {
    expect(xorOperation(5, 0)).toBe(8);
  });
  test('Example 2', () => {
    expect(xorOperation(4, 3)).toBe(8);
  });
});
