import { executeInstructions } from './leetcode-2120';

describe('2024-04-05: LeetCode 2120', () => {
  test('Example 1', () => {
    expect(executeInstructions(3, [0, 1], 'RRDDLU')).toEqual([1, 5, 4, 3, 1, 0]);
  });
  test('Example 2', () => {
    expect(executeInstructions(2, [1, 1], 'LURD')).toEqual([4, 1, 0, 0]);
  });
  test('Example 3', () => {
    expect(executeInstructions(1, [0, 0], 'LRUD')).toEqual([0, 0, 0, 0]);
  });
});
