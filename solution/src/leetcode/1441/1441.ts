/**
 * 1441. Build an Array With Stack Operations
 * https://leetcode.com/problems/build-an-array-with-stack-operations
 */
export function buildArray(target: number[]): string[] {
  const answer = [];

  const set = new Set(target);
  const lastTarget = target[target.length - 1];
  for (let i = 1; i <= lastTarget; i++) {
    answer.push('Push');
    if (!set.has(i)) {
      answer.push('Pop');
    }
  }
  return answer;
}
