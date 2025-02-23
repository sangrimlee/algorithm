import { beautifulSubsets } from './2597';

describe('LeetCode 2597', () => {
  test('Example 1', () => {
    expect(beautifulSubsets([2, 4, 6], 2)).toBe(4);
  });
  test('Example 2', () => {
    expect(beautifulSubsets([1], 1)).toBe(1);
  });
});
