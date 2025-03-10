import { minimumChairs } from './3168';

describe('LeetCode 3168', () => {
  test('Example 1', () => {
    expect(minimumChairs('EEEEEEE')).toBe(7);
  });

  test('Example 2', () => {
    expect(minimumChairs('ELELEEL')).toBe(2);
  });

  test('Example 3', () => {
    expect(minimumChairs('ELEELEELLL')).toBe(3);
  });
});
