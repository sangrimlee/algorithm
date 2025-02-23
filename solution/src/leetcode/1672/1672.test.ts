import { maximumWealth } from './1672';

describe('LeetCode 1672', () => {
  test('Example 1', () => {
    expect(
      maximumWealth([
        [1, 2, 3],
        [3, 2, 1],
      ]),
    ).toBe(6);
  });
  test('Example 2', () => {
    expect(
      maximumWealth([
        [1, 5],
        [7, 3],
        [3, 5],
      ]),
    ).toBe(10);
  });
  test('Example 3', () => {
    expect(
      maximumWealth([
        [2, 8, 7],
        [7, 1, 3],
        [1, 9, 5],
      ]),
    ).toBe(17);
  });
});
