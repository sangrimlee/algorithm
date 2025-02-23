import { findRelativeRanks } from './0506';

describe('LeetCode 0506', () => {
  test('Example 1', () => {
    expect(findRelativeRanks([5, 4, 3, 2, 1])).toEqual([
      'Gold Medal',
      'Silver Medal',
      'Bronze Medal',
      '4',
      '5',
    ]);
  });
  test('Example 2', () => {
    expect(findRelativeRanks([10, 3, 8, 9, 4])).toEqual([
      'Gold Medal',
      '5',
      'Bronze Medal',
      'Silver Medal',
      '4',
    ]);
  });
});
