import { minMutation } from './0433';

describe('LeetCode 0433', () => {
  test('Example 1', () => {
    const startGene = 'AACCGGTT',
      endGene = 'AACCGGTA',
      bank = ['AACCGGTA'];
    expect(minMutation(startGene, endGene, bank)).toBe(1);
  });

  test('Example 2', () => {
    const startGene = 'AACCGGTT',
      endGene = 'AAACGGTA',
      bank = ['AACCGGTA', 'AACCGCTA', 'AAACGGTA'];
    expect(minMutation(startGene, endGene, bank)).toBe(2);
  });
});
