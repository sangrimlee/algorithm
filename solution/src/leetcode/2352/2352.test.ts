import { equalPairs } from './2352';

describe('LeetCode 2352', () => {
  test('Example 1', () => {
    expect(
      equalPairs([
        [3, 2, 1],
        [1, 7, 6],
        [2, 7, 7],
      ]),
    ).toBe(1);
  });
  test('Example 2', () => {
    expect(
      equalPairs([
        [3, 1, 2, 2],
        [1, 4, 4, 5],
        [2, 4, 2, 2],
        [2, 4, 2, 2],
      ]),
    ).toBe(3);
  });
});
