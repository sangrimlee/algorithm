import { convertDateToBinary } from './leetcode-3280';

describe('2024-09-09: LeetCode 3280', () => {
  test('Example 1', () => {
    expect(convertDateToBinary('2080-02-29')).toBe('100000100000-10-11101');
  });
  test('Example 2', () => {
    expect(convertDateToBinary('1900-01-01')).toBe('11101101100-1-1');
  });
});
