import { isFascinating } from './2729';

describe('LeetCode 2729', () => {
  test('Example 1', () => {
    expect(isFascinating(192)).toBe(true);
  });
  test('Example 2', () => {
    expect(isFascinating(100)).toBe(false);
  });
});
