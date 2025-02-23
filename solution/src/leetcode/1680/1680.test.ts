import { concatenatedBinary } from './1680';

describe('LeetCode 1680', () => {
  test('Example 1', () => {
    expect(concatenatedBinary(1)).toBe(1);
  });

  test('Example 2', () => {
    expect(concatenatedBinary(3)).toBe(27);
  });

  test('Example 3', () => {
    expect(concatenatedBinary(12)).toBe(505379714);
  });
});
