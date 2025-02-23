import { countHillValley } from './2210';

describe('LeetCode 2210', () => {
  test('Example 1', () => {
    expect(countHillValley([2, 4, 1, 1, 6, 5])).toBe(3);
  });
  test('Example 2', () => {
    expect(countHillValley([6, 6, 5, 5, 4, 1])).toBe(0);
  });
});
