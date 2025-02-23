import { applyOperations } from './2460';

describe('LeetCode 2460', () => {
  test('Example 1', () => {
    expect(applyOperations([1, 2, 2, 1, 1, 0])).toEqual([1, 4, 2, 0, 0, 0]);
  });
  test('Example 2', () => {
    expect(applyOperations([0, 1])).toEqual([1, 0]);
  });
});
