import { thirdMax } from './0414';

describe('LeetCode 0414', () => {
  test('Example 1', () => {
    expect(thirdMax([3, 2, 1])).toBe(1);
  });
  test('Example 2', () => {
    expect(thirdMax([1, 2])).toBe(2);
  });
  test('Example 3', () => {
    expect(thirdMax([2, 2, 3, 1])).toBe(1);
  });
});
