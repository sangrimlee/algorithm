import { countCompleteSubarrays } from './2799';

describe('LeetCode 2799', () => {
  test('Example 1', () => {
    expect(countCompleteSubarrays([1, 3, 1, 2, 2])).toBe(4);
  });
  test('Example 2', () => {
    expect(countCompleteSubarrays([5, 5, 5, 5])).toBe(10);
  });
});
