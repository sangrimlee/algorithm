import { numberOfAlternatingGroups } from './3208';

describe('LeetCode 3208', () => {
  test('Example 1', () => {
    expect(numberOfAlternatingGroups([0, 1, 0, 1, 0], 3)).toBe(3);
  });
  test('Example 2', () => {
    expect(numberOfAlternatingGroups([0, 1, 0, 0, 1, 0, 1], 6)).toBe(2);
  });
  test('Example 3', () => {
    expect(numberOfAlternatingGroups([1, 1, 0, 1], 4)).toBe(0);
  });
});
