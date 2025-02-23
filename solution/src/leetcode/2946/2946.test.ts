import { areSimilar } from './2946';

describe('LeetCode 2946', () => {
  test('Example 1', () => {
    expect(
      areSimilar(
        [
          [1, 2, 1, 2],
          [5, 5, 5, 5],
          [6, 3, 6, 3],
        ],
        2,
      ),
    ).toBe(true);
  });
  test('Example 2', () => {
    expect(
      areSimilar(
        [
          [2, 2],
          [2, 2],
        ],
        3,
      ),
    ).toBe(true);
  });
  test('Example 3', () => {
    expect(areSimilar([[1, 2]], 1)).toBe(false);
  });
});
