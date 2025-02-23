import { minChanges } from './3226';

describe('LeetCode 3226', () => {
  test('Example 1', () => {
    expect(minChanges(13, 4)).toBe(2);
  });
  test('Example 2', () => {
    expect(minChanges(21, 21)).toBe(0);
  });
  test('Example 3', () => {
    expect(minChanges(14, 13)).toBe(-1);
  });
});
