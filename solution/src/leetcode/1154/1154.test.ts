import { dayOfYear } from './1154';

describe('LeetCode 1154', () => {
  test('Example 1', () => {
    expect(dayOfYear('2019-01-09')).toBe(9);
  });
  test('Example 2', () => {
    expect(dayOfYear('2019-02-10')).toBe(41);
  });
});
