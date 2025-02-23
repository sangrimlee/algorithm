import { maxFrequencyElements } from './3005';

describe('LeetCode 3005', () => {
  test('Example 1', () => {
    expect(maxFrequencyElements([1, 2, 2, 3, 1, 4])).toBe(4);
  });
  test('Example 2', () => {
    expect(maxFrequencyElements([1, 2, 3, 4, 5])).toBe(5);
  });
});
