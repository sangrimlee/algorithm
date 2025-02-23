import { minimumOperations } from './3396';

describe('LeetCode 3396', () => {
  test('Example 1', () => {
    expect(minimumOperations([1, 2, 3, 4, 2, 3, 3, 5, 7])).toBe(2);
  });
  test('Example 2', () => {
    expect(minimumOperations([4, 5, 6, 4, 4])).toBe(2);
  });
  test('Example 3', () => {
    expect(minimumOperations([6, 7, 8, 9])).toBe(0);
  });
});
