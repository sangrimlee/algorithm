import { partitionString } from './2405';

describe('LeetCode 2405', () => {
  test('Example 1', () => {
    expect(partitionString('abacaba')).toBe(4);
  });
  test('Example 2', () => {
    expect(partitionString('ssssss')).toBe(6);
  });
});
