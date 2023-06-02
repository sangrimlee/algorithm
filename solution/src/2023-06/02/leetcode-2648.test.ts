import { fibGenerator } from './leetcode-2648';

describe('2023-06-02: LeetCode 2648', () => {
  test('Example 1', () => {
    const gen = fibGenerator();

    expect(gen.next().value).toEqual(0);
    expect(gen.next().value).toEqual(1);
    expect(gen.next().value).toEqual(1);
    expect(gen.next().value).toEqual(2);
    expect(gen.next().value).toEqual(3);
  });
});
