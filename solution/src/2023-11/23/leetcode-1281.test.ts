import { subtractProductAndSum } from './leetcode-1281';

describe('2023-11-23: LeetCode 1281', () => {
  test('Example 1', () => {
    expect(subtractProductAndSum(234)).toBe(15);
  });
  test('Example 2', () => {
    expect(subtractProductAndSum(4421)).toBe(21);
  });
});
