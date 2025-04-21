import { numRabbits } from './0781';

describe('LeetCode 0781', () => {
  test('Example 1', () => {
    expect(numRabbits([1, 1, 2])).toBe(5);
  });
  test('Example 2', () => {
    expect(numRabbits([10, 10, 10])).toBe(11);
  });
});
