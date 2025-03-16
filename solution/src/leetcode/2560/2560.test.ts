import { minCapability } from './2560';

describe('LeetCode 2560', () => {
  test('Example 1', () => {
    expect(minCapability([2, 3, 5, 9], 2)).toBe(5);
  });
  test('Example 2', () => {
    expect(minCapability([2, 7, 9, 3, 1], 2)).toBe(2);
  });
});
