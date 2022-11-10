import { removeDuplicates } from './leecode-1047';

describe('2022-11-10: Leecode 1047', () => {
  test('Example 1', () => {
    expect(removeDuplicates('abbaca')).toBe('ca');
  });

  test('Example 2', () => {
    expect(removeDuplicates('azxxzy')).toBe('ay');
  });

  test('Example 3', () => {
    expect(removeDuplicates('abbbaca')).toBe('abaca');
  });
});
