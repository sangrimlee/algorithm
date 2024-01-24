/**
 * 187. Repeated DNA Sequences
 * https://leetcode.com/problems/repeated-dna-sequences
 */
export function findRepeatedDnaSequences(s: string): string[] {
  const sequences = new Set<string>();
  const answer = new Set<string>();
  for (let i = 0; i < s.length - 9; i++) {
    const sequence = s.substring(i, i + 10);
    if (sequences.has(sequence)) {
      answer.add(sequence);
    } else {
      sequences.add(sequence);
    }
  }
  return [...answer];
}
