import { minGroups } from './2406';

describe('LeetCode 2406', () => {
  test('Example 1', () => {
    expect(
      minGroups([
        [5, 10],
        [6, 8],
        [1, 5],
        [2, 3],
        [1, 10],
      ]),
    ).toBe(3);
  });
  test('Example 2', () => {
    expect(
      minGroups([
        [1, 3],
        [5, 6],
        [8, 10],
        [11, 13],
      ]),
    ).toBe(1);
  });
  test('Example 3', () => {
    expect(minGroups([[1, 1]])).toBe(1);
  });
});
