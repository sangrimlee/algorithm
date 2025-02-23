import { maxCount } from './0598';

describe('LeetCode 0598', () => {
  test('Example 1', () => {
    expect(
      maxCount(3, 3, [
        [2, 2],
        [3, 3],
      ]),
    ).toBe(4);
  });
  test('Example 2', () => {
    expect(
      maxCount(3, 3, [
        [2, 2],
        [3, 3],
        [3, 3],
        [3, 3],
        [2, 2],
        [3, 3],
        [3, 3],
        [3, 3],
        [2, 2],
        [3, 3],
        [3, 3],
        [3, 3],
      ]),
    ).toBe(4);
  });
  test('Example 3', () => {
    expect(maxCount(3, 3, [])).toBe(9);
  });
});
