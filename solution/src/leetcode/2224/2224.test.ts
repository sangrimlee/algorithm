import { convertTime } from './2224';

describe('LeetCode 2224', () => {
  test('Example 1', () => {
    expect(convertTime('02:30', '04:35')).toBe(3);
  });
  test('Example 2', () => {
    expect(convertTime('11:00', '11:01')).toBe(1);
  });
});
