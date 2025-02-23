import { specialArray } from './1608';

describe('LeetCode 1608', () => {
  test('Example 1', () => {
    expect(specialArray([3, 5])).toBe(2);
  });
  test('Example 2', () => {
    expect(specialArray([0, 0])).toBe(-1);
  });
  test('Example 3', () => {
    expect(specialArray([0, 4, 3, 0, 4])).toBe(3);
  });
});
