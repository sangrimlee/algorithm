import { minimumOperations } from './2357';

describe('LeetCode 2357', () => {
  test('Example 1', () => {
    expect(minimumOperations([1, 5, 0, 3, 5])).toBe(3);
  });
  test('Example 2', () => {
    expect(minimumOperations([0])).toBe(0);
  });
});
