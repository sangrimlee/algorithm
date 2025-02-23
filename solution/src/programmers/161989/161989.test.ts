import { overPainting } from './161989';

describe('LeetCode 161989', () => {
  test('Example 1', () => {
    expect(overPainting(8, 4, [2, 3, 6])).toBe(2);
  });
  test('Example 2', () => {
    expect(overPainting(5, 4, [1, 3])).toBe(1);
  });
  test('Example 3', () => {
    expect(overPainting(4, 1, [1, 2, 3, 4])).toBe(4);
  });
});
