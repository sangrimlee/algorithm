import { sortColors } from './0075';

describe('LeetCode 0075', () => {
  test('Example 1', () => {
    const nums = [2, 0, 2, 1, 1, 0];
    sortColors(nums);
    expect(nums).toEqual([0, 0, 1, 1, 2, 2]);
  });
  test('Example 2', () => {
    const nums = [2, 0, 1];
    sortColors(nums);
    expect(nums).toEqual([0, 1, 2]);
  });
});
