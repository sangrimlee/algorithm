import { predictPartyVictory } from './leetcode-649';

describe('2023-05-04: LeetCode 649', () => {
  test('Example 1', () => {
    expect(predictPartyVictory('RD')).toBe('Radiant');
  });
  test('Example 2', () => {
    expect(predictPartyVictory('RDD')).toBe('Dire');
  });
});
