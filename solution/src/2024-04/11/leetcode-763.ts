/**
 * 763. Partition Labels
 * https://leetcode.com/problems/partition-labels
 */
export function partitionLabels(s: string): number[] {
  const answer: number[] = [];
  const endIndices = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    endIndices.set(s[i], i);
  }

  let startIndex = 0;
  let endIndex = 0;
  for (let i = 0; i < s.length; i++) {
    endIndex = Math.max(endIndex, endIndices.get(s[i])!);
    if (endIndex === i) {
      answer.push(endIndex - startIndex + 1);
      startIndex = endIndex + 1;
    }
  }
  return answer;
}
