import { possibleStringCount } from './3330';

describe('LeetCode 3330', () => {
  test('Example 1', () => {
    expect(possibleStringCount('abbcccc')).toBe(5);
  });
  test('Example 2', () => {
    expect(possibleStringCount('abcd')).toBe(1);
  });
  test('Example 3', () => {
    expect(possibleStringCount('aaaa')).toBe(4);
  });
});
