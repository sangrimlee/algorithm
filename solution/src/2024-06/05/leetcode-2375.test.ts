import { smallestNumber } from './leetcode-2375';

describe('2024-06-05: LeetCode 2375', () => {
  test('Example 1', () => {
    expect(smallestNumber('IIIDIDDD')).toBe('123549876');
  });
  test('Example 2', () => {
    expect(smallestNumber('DDD')).toBe('4321');
  });
});
