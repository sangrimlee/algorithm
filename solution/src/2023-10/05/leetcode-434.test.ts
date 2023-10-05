import { countSegments } from './leetcode-434';

describe('2023-10-05: LeetCode 434', () => {
  test('Example 1', () => {
    expect(countSegments('Hello, my name is John')).toBe(5);
  });
  test('Example 2', () => {
    expect(countSegments('Hello')).toBe(1);
  });
});
