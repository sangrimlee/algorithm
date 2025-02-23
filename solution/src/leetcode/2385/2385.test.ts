import { createTree } from '@algorithm/lib';
import { amountOfTime } from './2385';

describe('LeetCode 2385', () => {
  test('Example 1', () => {
    expect(amountOfTime(createTree([1, 5, 3, null, 4, 10, 6, 9, 2]), 3)).toBe(4);
  });
  test('Example 2', () => {
    expect(amountOfTime(createTree([1]), 1)).toBe(0);
  });
});
