import { countMatches } from './1773';

describe('LeetCode 1773', () => {
  test('Example 1', () => {
    expect(
      countMatches(
        [
          ['phone', 'blue', 'pixel'],
          ['computer', 'silver', 'lenovo'],
          ['phone', 'gold', 'iphone'],
        ],
        'color',
        'silver',
      ),
    ).toBe(1);
  });
  test('Example 2', () => {
    expect(
      countMatches(
        [
          ['phone', 'blue', 'pixel'],
          ['computer', 'silver', 'phone'],
          ['phone', 'gold', 'iphone'],
        ],
        'type',
        'phone',
      ),
    ).toBe(2);
  });
});
