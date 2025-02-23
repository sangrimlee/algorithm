import { countValidSelections } from './3354';

describe('LeetCode 3354', () => {
  test('Example 1', () => {
    expect(countValidSelections([1, 0, 2, 0, 3])).toBe(2);
  });
  test('Example 2', () => {
    expect(countValidSelections([2, 3, 4, 0, 4, 1, 0])).toBe(0);
  });
});
