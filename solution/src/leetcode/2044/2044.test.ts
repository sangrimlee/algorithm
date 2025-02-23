import { countMaxOrSubsets } from './2044';

describe('LeetCode 2044', () => {
  test('Example 1', () => {
    expect(countMaxOrSubsets([3, 1])).toBe(2);
  });
  test('Example 2', () => {
    expect(countMaxOrSubsets([2, 2, 2])).toBe(7);
  });
  test('Example 3', () => {
    expect(countMaxOrSubsets([3, 2, 1, 5])).toBe(6);
  });
});
