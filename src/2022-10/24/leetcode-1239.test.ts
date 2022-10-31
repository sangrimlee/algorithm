import { maxLength } from './leetcode-1239';

describe('2022-10-24: LeetCode 1239', () => {
  test('Example 1', () => {
    const arr = ['un', 'iq', 'ue'];
    expect(maxLength(arr)).toBe(4);
  });

  test('Example 2', () => {
    const arr = ['cha', 'r', 'act', 'ers'];
    expect(maxLength(arr)).toBe(6);
  });

  test('Example 3', () => {
    const arr = ['abcdefghijklmnopqrstuvwxyz'];
    expect(maxLength(arr)).toBe(26);
  });

  test('Example 4', () => {
    const arr = ['aa', 'bb'];
    expect(maxLength(arr)).toBe(0);
  });
});
