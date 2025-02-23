import { maximumUniqueSubarray } from './1695';

describe('LeetCode 1695', () => {
  test('Example 1', () => {
    expect(maximumUniqueSubarray([4, 2, 4, 5, 6])).toBe(17);
  });

  test('Example 2', () => {
    expect(maximumUniqueSubarray([5, 2, 1, 2, 5, 2, 1, 2, 5])).toBe(8);
  });
});
