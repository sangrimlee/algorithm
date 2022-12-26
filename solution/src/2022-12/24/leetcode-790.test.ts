import { numTilings } from './leetcode-790';

describe('2022-12-24: LeetCode 790', () => {
  test('Example 1', () => {
    expect(numTilings(3)).toBe(5);
  });

  test('Example 2', () => {
    expect(numTilings(1)).toBe(1);
  });
});
