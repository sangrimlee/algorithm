import { busyStudent } from './1450';

describe('LeetCode 1450', () => {
  test('Example 1', () => {
    expect(busyStudent([1, 2, 3], [3, 2, 7], 4)).toBe(1);
  });
  test('Example 2', () => {
    expect(busyStudent([4], [4], 4)).toBe(1);
  });
});
