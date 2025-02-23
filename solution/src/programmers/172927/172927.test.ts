import { mineForMinerals } from './172927';

describe('LeetCode 172927', () => {
  test('Example 1', () => {
    expect(
      mineForMinerals(
        [1, 3, 2],
        ['diamond', 'diamond', 'diamond', 'iron', 'iron', 'diamond', 'iron', 'stone'],
      ),
    ).toBe(12);
  });
  test('Example 2', () => {
    expect(
      mineForMinerals(
        [0, 1, 1],
        [
          'diamond',
          'diamond',
          'diamond',
          'diamond',
          'diamond',
          'iron',
          'iron',
          'iron',
          'iron',
          'iron',
          'diamond',
        ],
      ),
    ).toBe(50);
  });
});
