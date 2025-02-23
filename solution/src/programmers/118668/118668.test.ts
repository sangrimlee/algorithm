import { studyCodingTest } from './118668';

describe('LeetCode 118668', () => {
  test('Example 1', () => {
    expect(
      studyCodingTest(10, 10, [
        [10, 15, 2, 1, 2],
        [20, 20, 3, 3, 4],
      ]),
    ).toBe(15);
  });
  test('Example 2', () => {
    expect(
      studyCodingTest(0, 0, [
        [0, 0, 2, 1, 2],
        [4, 5, 3, 1, 2],
        [4, 11, 4, 0, 2],
        [10, 4, 0, 4, 2],
      ]),
    ).toBe(13);
  });
});
