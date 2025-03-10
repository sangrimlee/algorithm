import { findCenter } from './1791';

describe('LeetCode 1791', () => {
  test('Example 1', () => {
    expect(
      findCenter([
        [1, 2],
        [2, 3],
        [4, 2],
      ]),
    ).toBe(2);
  });
  test('Example 2', () => {
    expect(
      findCenter([
        [1, 2],
        [5, 1],
        [1, 3],
        [1, 4],
      ]),
    ).toBe(1);
  });
});
