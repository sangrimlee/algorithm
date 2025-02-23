import { predictPartyVictory } from './0649';

describe('LeetCode 0649', () => {
  test('Example 1', () => {
    expect(predictPartyVictory('RD')).toBe('Radiant');
  });
  test('Example 2', () => {
    expect(predictPartyVictory('RDD')).toBe('Dire');
  });
});
