import { smallestNumber } from './2375';

describe('LeetCode 2375', () => {
  test('Example 1', () => {
    expect(smallestNumber('IIIDIDDD')).toBe('123549876');
  });
  test('Example 2', () => {
    expect(smallestNumber('DDD')).toBe('4321');
  });
});
