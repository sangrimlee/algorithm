import { removeDuplicates } from './0080';

describe('LeetCode 0080', () => {
  test('Example 1', () => {
    const arr = [1, 1, 1, 2, 2, 3];
    const answer = removeDuplicates(arr);
    expect(answer).toBe(5);
    expect(arr.slice(0, answer)).toEqual([1, 1, 2, 2, 3]);
  });
  test('Example 2', () => {
    const arr = [0, 0, 1, 1, 1, 1, 2, 3, 3];
    const answer = removeDuplicates(arr);
    expect(answer).toBe(7);
    expect(arr.slice(0, answer)).toEqual([0, 0, 1, 1, 2, 3, 3]);
  });
});
