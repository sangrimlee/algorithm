import { minimumTotalDistance } from './2463';

describe('LeetCode 2463', () => {
  test('Example 1', () => {
    expect(
      minimumTotalDistance(
        [0, 4, 6],
        [
          [2, 2],
          [6, 2],
        ],
      ),
    ).toBe(4);
  });
  test('Example 2', () => {
    expect(
      minimumTotalDistance(
        [1, -1],
        [
          [-2, 1],
          [2, 1],
        ],
      ),
    ).toBe(2);
  });
});
