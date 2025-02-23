import { roughKeyboard } from './160586';

describe('LeetCode 160586', () => {
  test('Example 1', () => {
    expect(roughKeyboard(['ABACD', 'BCEFD'], ['ABCD', 'AABB'])).toEqual([9, 4]);
  });
  test('Example 2', () => {
    expect(roughKeyboard(['AA'], ['B'])).toEqual([-1]);
  });
  test('Example 3', () => {
    expect(roughKeyboard(['AGZ', 'BSSS'], ['ASA', 'BGZ'])).toEqual([4, 6]);
  });
});
