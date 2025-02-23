import { equalFrequency } from './2423';

describe('LeetCode 2423', () => {
  test('Example 1', () => {
    expect(equalFrequency('abcc')).toBe(true);
  });
  test('Example 2', () => {
    expect(equalFrequency('aazz')).toBe(false);
  });
});
