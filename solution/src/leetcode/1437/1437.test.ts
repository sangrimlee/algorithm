import { kLengthApart } from './1437';

describe('LeetCode 1437', () => {
  test('Example 1', () => {
    expect(kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2)).toBe(true);
  });
  test('Example 2', () => {
    expect(kLengthApart([1, 0, 0, 1, 0, 1], 2)).toBe(false);
  });
});
