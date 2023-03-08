import { splitString } from './programmers-140108';

describe('2023-03-09: Programmers 140108', () => {
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
