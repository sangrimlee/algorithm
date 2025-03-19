import { minOperations } from './3191';

describe('LeetCode 3191', () => {
  test('Example 1', () => {
    expect(minOperations([0, 1, 1, 1, 0, 0])).toBe(3);
  });
  test('Example 2', () => {
    expect(minOperations([0, 1, 1, 1])).toBe(-1);
  });
});
