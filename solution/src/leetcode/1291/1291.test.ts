import { sequentialDigits } from './1291';

describe('LeetCode 1291', () => {
  test('Example 1', () => {
    expect(sequentialDigits(100, 300)).toEqual([123, 234]);
  });
  test('Example 2', () => {
    expect(sequentialDigits(1000, 13000)).toEqual([1234, 2345, 3456, 4567, 5678, 6789, 12345]);
  });
});
