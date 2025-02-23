import { findNumbers } from './1295';

describe('LeetCode 1295', () => {
  test('Example 1', () => {
    expect(findNumbers([12, 345, 2, 6, 7896])).toBe(2);
  });
  test('Example 2', () => {
    expect(findNumbers([555, 901, 482, 1771])).toBe(1);
  });
});
