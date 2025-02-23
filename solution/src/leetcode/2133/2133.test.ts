import { checkValid } from './2133';

describe('LeetCode 2133', () => {
  test('Example 1', () => {
    expect(
      checkValid([
        [1, 2, 3],
        [3, 1, 2],
        [2, 3, 1],
      ]),
    ).toBe(true);
  });
  test('Example 2', () => {
    expect(
      checkValid([
        [1, 1, 1],
        [1, 2, 3],
        [1, 2, 3],
      ]),
    ).toBe(false);
  });
});
