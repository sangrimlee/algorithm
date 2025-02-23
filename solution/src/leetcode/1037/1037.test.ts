import { isBoomerang } from './1037';

describe('LeetCode 1037', () => {
  test('Example 1', () => {
    expect(
      isBoomerang([
        [1, 1],
        [2, 3],
        [3, 2],
      ]),
    ).toBe(true);
  });
  test('Example 2', () => {
    expect(
      isBoomerang([
        [1, 1],
        [2, 2],
        [3, 3],
      ]),
    ).toBe(false);
  });
  test('Example 3', () => {
    expect(
      isBoomerang([
        [0, 1],
        [0, 1],
        [2, 1],
      ]),
    ).toBe(false);
  });
});
