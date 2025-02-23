import { hammingDistance } from './0461';

describe('LeetCode 0461', () => {
  test('Example 1', () => {
    expect(hammingDistance(1, 4)).toBe(2);
  });
  test('Example 2', () => {
    expect(hammingDistance(3, 1)).toBe(1);
  });
});
