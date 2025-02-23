import { maximalRectangle } from './0085';

describe('LeetCode 0085', () => {
  test('Example 1', () => {
    expect(
      maximalRectangle([
        ['1', '0', '1', '0', '0'],
        ['1', '0', '1', '1', '1'],
        ['1', '1', '1', '1', '1'],
        ['1', '0', '0', '1', '0'],
      ]),
    ).toBe(6);
  });
  test('Example 2', () => {
    expect(maximalRectangle([['0']])).toBe(0);
  });
  test('Example 3', () => {
    expect(maximalRectangle([['1']])).toBe(1);
  });
});
