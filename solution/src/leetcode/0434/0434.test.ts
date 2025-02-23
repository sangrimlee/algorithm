import { countSegments } from './0434';

describe('LeetCode 0434', () => {
  test('Example 1', () => {
    expect(countSegments('Hello, my name is John')).toBe(5);
  });
  test('Example 2', () => {
    expect(countSegments('Hello')).toBe(1);
  });
});
