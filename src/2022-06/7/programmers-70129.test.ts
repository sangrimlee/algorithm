import { solution } from './programmers-70129';

describe('2022-06-07: Programmers 70129', () => {
  test('Example 1', () => {
    expect(solution('110010101001')).toEqual([3, 8]);
  });

  test('Example 2', () => {
    expect(solution('01110')).toEqual([3, 3]);
  });

  test('Example 3', () => {
    expect(solution('1111111')).toEqual([4, 1]);
  });
});
