import { validStrings } from './3211';

describe('LeetCode 3211', () => {
  test('Example 1', () => {
    expect(validStrings(3).sort()).toEqual(['010', '011', '101', '110', '111'].sort());
  });
  test('Example 2', () => {
    expect(validStrings(1).sort()).toEqual(['0', '1'].sort());
  });
});
