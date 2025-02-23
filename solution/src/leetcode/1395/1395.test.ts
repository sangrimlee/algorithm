import { numTeams } from './1395';

describe('LeetCode 1395', () => {
  test('Example 1', () => {
    expect(numTeams([2, 5, 3, 4, 1])).toBe(3);
  });
  test('Example 2', () => {
    expect(numTeams([2, 1, 3])).toBe(0);
  });
  test('Example 3', () => {
    expect(numTeams([1, 2, 3, 4])).toBe(4);
  });
});
