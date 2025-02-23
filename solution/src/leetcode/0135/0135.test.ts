import { candy } from './0135';

describe('LeetCode 0135', () => {
  test('Example 1', () => {
    expect(candy([1, 0, 2])).toBe(5);
  });
  test('Example 2', () => {
    expect(candy([1, 2, 2])).toBe(4);
  });
  test('Example 3', () => {
    expect(candy([1, 2, 87, 87, 87, 2, 1])).toBe(13);
  });
});
