import { uniqueOccurrences } from './leetcode-1207';

describe('2022-11-30: Leetcode 1207', () => {
  test('Example 1', () => {
    const arr = [1, 2, 2, 1, 1, 3];
    expect(uniqueOccurrences(arr)).toBeTruthy();
  });

  test('Example 2', () => {
    const arr = [1, 2];
    expect(uniqueOccurrences(arr)).toBeFalsy();
  });

  test('Example 3', () => {
    const arr = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0];
    expect(uniqueOccurrences(arr)).toBeTruthy();
  });
});
