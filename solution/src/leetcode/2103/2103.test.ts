import { countPoints } from './2103';

describe('LeetCode 2103', () => {
  test('Example 1', () => {
    expect(countPoints('B0B6G0R6R0R6G9')).toBe(1);
  });
  test('Example 2', () => {
    expect(countPoints('B0R0G0R9R0B0G0')).toBe(1);
  });
  test('Example 3', () => {
    expect(countPoints('G4')).toBe(0);
  });
});
