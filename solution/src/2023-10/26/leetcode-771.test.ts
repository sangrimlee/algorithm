import { numJewelsInStones } from './leetcode-771';

describe('2023-10-26: LeetCode 771', () => {
  test('Example 1', () => {
    expect(numJewelsInStones('aA', 'aAAbbbb')).toBe(3);
  });
  test('Example 2', () => {
    expect(numJewelsInStones('z', 'ZZ')).toBe(0);
  });
});
