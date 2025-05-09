import { slidingPuzzle } from './0773';

describe('LeetCode 0773', () => {
  test('Example 1', () => {
    expect(
      slidingPuzzle([
        [1, 2, 3],
        [4, 0, 5],
      ]),
    ).toBe(1);
  });
  test('Example 2', () => {
    expect(
      slidingPuzzle([
        [1, 2, 3],
        [5, 4, 0],
      ]),
    ).toBe(-1);
  });
  test('Example 3', () => {
    expect(
      slidingPuzzle([
        [4, 1, 2],
        [5, 0, 3],
      ]),
    ).toBe(5);
  });
});
