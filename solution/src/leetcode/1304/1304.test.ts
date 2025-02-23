import { sumZero } from './1304';

expect.extend({
  toSumZero(received: number[]) {
    const sum = received.reduce((prev, num) => prev + num, 0);
    if (sum === 0) {
      return {
        pass: true,
        message: () => `Expected ${received.toString()} to be sum zero.`,
      };
    }
    return {
      pass: false,
      message: () => `Expected ${received.toString()} to be sum zero.`,
    };
  },
});

describe('LeetCode 1304', () => {
  function isSumZero(arr: number[]) {
    return arr.reduce((prev, num) => prev + num, 0) === 0;
  }
  test('Example 1', () => {
    const answer = sumZero(5);
    expect(isSumZero(answer)).toBeTruthy();
  });
  test('Example 2', () => {
    const answer = sumZero(3);
    expect(isSumZero(answer)).toBeTruthy();
  });
  test('Example 3', () => {
    const answer = sumZero(1);
    expect(isSumZero(answer)).toBeTruthy();
  });
});
