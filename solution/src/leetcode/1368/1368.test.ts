import { minCost } from './1368';

describe('LeetCode 1368', () => {
  test('Example 1', () => {
    expect(
      minCost([
        [1, 1, 1, 1],
        [2, 2, 2, 2],
        [1, 1, 1, 1],
        [2, 2, 2, 2],
      ]),
    ).toBe(3);
  });
  test('Example 2', () => {
    expect(
      minCost([
        [1, 1, 3],
        [3, 2, 2],
        [1, 1, 4],
      ]),
    ).toBe(0);
  });
  test('Example 3', () => {
    expect(
      minCost([
        [1, 2],
        [4, 3],
      ]),
    ).toBe(1);
  });
});
