import { createTree } from '@algorithm/lib';
import { maxLevelSum } from './1161';

describe('LeetCode 1161', () => {
  test('Example 1', () => {
    const root = createTree([1, 7, 0, 7, -8, null, null]);
    expect(maxLevelSum(root)).toBe(2);
  });
  test('Example 2', () => {
    const root = createTree([989, null, 10250, 98693, -89388, null, null, null, -32127]);
    expect(maxLevelSum(root)).toBe(2);
  });
});
