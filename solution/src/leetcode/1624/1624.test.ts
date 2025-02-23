import { maxLengthBetweenEqualCharacters } from './1624';

describe('LeetCode 1624', () => {
  test('Example 1', () => {
    expect(maxLengthBetweenEqualCharacters('aa')).toBe(0);
  });
  test('Example 2', () => {
    expect(maxLengthBetweenEqualCharacters('abca')).toBe(2);
  });
  test('Example 3', () => {
    expect(maxLengthBetweenEqualCharacters('cbzxy')).toBe(-1);
  });
});
