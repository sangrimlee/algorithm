import { minOperations } from './2033';

describe('LeetCode 2033', () => {
  test('Example 1', () => {
    expect(
      minOperations(
        [
          [2, 4],
          [6, 8],
        ],
        2,
      ),
    ).toBe(4);
  });
  test('Example 2', () => {
    expect(
      minOperations(
        [
          [1, 5],
          [2, 3],
        ],
        1,
      ),
    ).toBe(5);
  });
  test('Example 3', () => {
    expect(
      minOperations(
        [
          [1, 2],
          [3, 4],
        ],
        2,
      ),
    ).toBe(-1);
  });
  test('Example 4', () => {
    expect(
      minOperations(
        [
          [454, 328, 160, 286, 664],
          [496, 538, 748, 244, 286],
          [34, 244, 454, 706, 790],
          [496, 538, 832, 958, 328],
          [370, 874, 370, 874, 286],
        ],
        42,
      ),
    ).toBe(122);
  });
});
