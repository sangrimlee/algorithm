import { getSmallestString } from './3216';

describe('LeetCode 3216', () => {
  test('Example 1', () => {
    expect(getSmallestString('45320')).toBe('43520');
  });

  test('Example 2', () => {
    expect(getSmallestString('001')).toBe('001');
  });
});
