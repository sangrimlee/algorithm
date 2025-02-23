import { fizzBuzz } from './0412';

describe('LeetCode 0412', () => {
  test('Example 1', () => {
    expect(fizzBuzz(3)).toEqual(['1', '2', 'Fizz']);
  });
  test('Example 2', () => {
    expect(fizzBuzz(5)).toEqual(['1', '2', 'Fizz', '4', 'Buzz']);
  });
  test('Example 3', () => {
    expect(fizzBuzz(15)).toEqual([
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz',
    ]);
  });
});
