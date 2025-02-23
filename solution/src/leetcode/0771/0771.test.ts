import { numJewelsInStones } from './0771';

describe('LeetCode 0771', () => {
  test('Example 1', () => {
    expect(numJewelsInStones('aA', 'aAAbbbb')).toBe(3);
  });
  test('Example 2', () => {
    expect(numJewelsInStones('z', 'ZZ')).toBe(0);
  });
});
