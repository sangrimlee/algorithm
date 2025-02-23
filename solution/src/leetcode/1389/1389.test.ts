import { createTargetArray } from './1389';

describe('LeetCode 1389', () => {
  test('Example 1', () => {
    expect(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1])).toEqual([0, 4, 1, 3, 2]);
  });
  test('Example 2', () => {
    expect(createTargetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0])).toEqual([0, 1, 2, 3, 4]);
  });
  test('Example 3', () => {
    expect(createTargetArray([1], [0])).toEqual([1]);
  });
});
