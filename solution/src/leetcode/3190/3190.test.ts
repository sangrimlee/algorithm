import { minimumOperations } from './3190';

describe('LeetCode 3190', () => {
  test('Example 1', () => {
    expect(minimumOperations([1, 2, 3, 4])).toBe(3);
  });
  test('Example 2', () => {
    expect(minimumOperations([3, 6, 9])).toBe(0);
  });
});
