import { countSubarrays } from './3392';

describe('LeetCode 3392', () => {
  test('Example 1', () => {
    expect(countSubarrays([1, 2, 1, 4, 1])).toBe(1);
  });
  test('Example 2', () => {
    expect(countSubarrays([1, 1, 1])).toBe(0);
  });
});
