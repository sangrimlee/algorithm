import { solution } from './programmers-142086';

describe('2023-03-03: Programmers 142086', () => {
  test('Example 1', () => {
    expect(solution('banana')).toEqual([-1, -1, -1, 2, 2, 2]);
  });

  test('Example 2', () => {
    expect(solution('foobar')).toEqual([-1, -1, 1, -1, -1, -1]);
  });
});
