import { courierBox } from './131704';

describe('LeetCode 131704', () => {
  test('Example 1', () => {
    expect(courierBox([4, 3, 1, 2, 5])).toBe(2);
  });
  test('Example 2', () => {
    expect(courierBox([5, 4, 3, 2, 1])).toBe(5);
  });
});
