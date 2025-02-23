import { leftRightDifference } from './2574';

describe('LeetCode 2574', () => {
  test('Example 1', () => {
    expect(leftRightDifference([10, 4, 8, 3])).toEqual([15, 1, 11, 22]);
  });
  test('Example 2', () => {
    expect(leftRightDifference([1])).toEqual([0]);
  });
});
