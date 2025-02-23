import { findOcurrences } from './1078';

describe('LeetCode 1078', () => {
  test('Example 1', () => {
    expect(findOcurrences('alice is a good girl she is a good student', 'a', 'good')).toEqual([
      'girl',
      'student',
    ]);
  });
  test('Example 2', () => {
    expect(findOcurrences('we will we will rock you', 'we', 'will')).toEqual(['we', 'rock']);
  });
});
