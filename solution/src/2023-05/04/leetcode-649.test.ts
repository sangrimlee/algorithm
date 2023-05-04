import { predictPartyVictory } from './leetcode-649';

describe('2023-05-04: LeetCode 649', () => {
  test('Example 1', () => {
    expect(predictPartyVictory('RD')).toEqual('Radiant');
  });
  test('Example 2', () => {
    expect(predictPartyVictory('RDD')).toEqual('Dire');
  });
});
