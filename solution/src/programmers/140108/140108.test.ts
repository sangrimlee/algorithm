import { splitString } from './140108';

describe('LeetCode 140108', () => {
  test('Example 1', () => {
    expect(splitString('banana')).toBe(3);
  });
  test('Example 2', () => {
    expect(splitString('abracadabra')).toBe(6);
  });
  test('Example 3', () => {
    expect(splitString('aaabbaccccabba')).toBe(3);
  });
});
