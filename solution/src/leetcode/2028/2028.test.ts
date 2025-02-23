import { missingRolls } from './2028';

describe('LeetCode 2028', () => {
  test('Example 1', () => {
    expect(missingRolls([3, 2, 4, 3], 4, 2)).toEqual([6, 6]);
  });
  test('Example 2', () => {
    expect(missingRolls([1, 5, 6], 3, 4)).toEqual([3, 2, 2, 2]);
  });
  test('Example 3', () => {
    expect(missingRolls([1, 2, 3, 4], 6, 4)).toEqual([]);
  });
});
