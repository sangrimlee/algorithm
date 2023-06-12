import { isEmpty } from './leetcode-2727';

describe('2023-06-12: LeetCode 2727', () => {
  test('Example 1', () => {
    expect(isEmpty({ x: 5, y: 42 })).toBe(false);
  });
  test('Example 2', () => {
    expect(isEmpty({})).toBe(true);
  });
  test('Example 3', () => {
    expect(isEmpty([null, false, 0])).toBe(false);
  });
});
