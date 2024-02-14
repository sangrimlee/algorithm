import { convertTime } from './leetcode-2224';

describe('2024-02-14: LeetCode 2224', () => {
  test('Example 1', () => {
    expect(convertTime('02:30', '04:35')).toBe(3);
  });
  test('Example 2', () => {
    expect(convertTime('11:00', '11:01')).toBe(1);
  });
});
