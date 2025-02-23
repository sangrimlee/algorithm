import { babblingII } from './133499';

describe('Programmers 133499', () => {
  test('Example 1', () => {
    expect(babblingII(['aya', 'yee', 'u', 'maa'])).toBe(1);
  });
  test('Example 2', () => {
    expect(babblingII(['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa'])).toBe(2);
  });
});
