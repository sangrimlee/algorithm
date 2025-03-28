import { lastVisitedIntegers } from './2899';

describe('LeetCode 2899', () => {
  test('Example 1', () => {
    expect(lastVisitedIntegers([1, 2, -1, -1, -1])).toEqual([2, 1, -1]);
  });
  test('Example 2', () => {
    expect(lastVisitedIntegers([1, -1, 2, -1, -1])).toEqual([1, 2, 1]);
  });
});
