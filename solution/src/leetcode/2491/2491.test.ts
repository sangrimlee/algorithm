import { dividePlayers } from './2491';

describe('LeetCode 2491', () => {
  test('Example 1', () => {
    expect(dividePlayers([3, 2, 5, 1, 3, 4])).toBe(22);
  });
  test('Example 2', () => {
    expect(dividePlayers([3, 4])).toBe(12);
  });
  test('Example 3', () => {
    expect(dividePlayers([1, 1, 2, 3])).toBe(-1);
  });
});
