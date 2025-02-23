import { circularGameLosers } from './2682';

describe('LeetCode 2682', () => {
  test('Example 1', () => {
    expect(circularGameLosers(5, 2)).toEqual([4, 5]);
  });
  test('Example 2', () => {
    expect(circularGameLosers(4, 4)).toEqual([2, 3, 4]);
  });
});
