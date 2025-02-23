import { minOperations } from './3375';

describe('LeetCode 3375', () => {
  test('Example 1', () => {
    expect(minOperations([5, 2, 5, 4, 5], 2)).toBe(2);
  });
  test('Example 2', () => {
    expect(minOperations([2, 1, 2], 2)).toBe(-1);
  });
  test('Example 3', () => {
    expect(minOperations([9, 7, 5, 3], 1)).toBe(4);
  });
});
