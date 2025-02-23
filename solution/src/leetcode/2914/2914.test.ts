import { minChanges } from './2914';

describe('LeetCode 2914', () => {
  test('Example 1', () => {
    expect(minChanges('1001')).toBe(2);
  });
  test('Example 2', () => {
    expect(minChanges('10')).toBe(1);
  });
  test('Example 3', () => {
    expect(minChanges('0000')).toBe(0);
  });
});
