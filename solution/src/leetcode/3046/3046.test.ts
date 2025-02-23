import { isPossibleToSplit } from './3046';

describe('LeetCode 3046', () => {
  test('Example 1', () => {
    expect(isPossibleToSplit([1, 1, 2, 2, 3, 4])).toBe(true);
  });
  test('Example 2', () => {
    expect(isPossibleToSplit([1, 1, 1, 1])).toBe(false);
  });
});
