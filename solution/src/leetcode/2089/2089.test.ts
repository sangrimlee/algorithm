import { targetIndices } from './2089';

describe('LeetCode 2089', () => {
  test('Example 1', () => {
    const nums = [1, 2, 5, 2, 3],
      target = 2;
    expect(targetIndices(nums, target)).toEqual([1, 2]);
  });

  test('Example 2', () => {
    const nums = [1, 2, 5, 2, 3],
      target = 3;
    expect(targetIndices(nums, target)).toEqual([3]);
  });

  test('Example 3', () => {
    const nums = [1, 2, 5, 2, 3],
      target = 5;

    expect(targetIndices(nums, target)).toEqual([4]);
  });
});
