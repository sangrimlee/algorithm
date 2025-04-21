/**
 * 781. Rabbits in Forest
 * https://leetcode.com/problems/rabbits-in-forest
 */
export function numRabbits(answers: number[]): number {
  const counter = new Map<number, number>();
  for (const answer of answers) {
    counter.set(answer, (counter.get(answer) ?? 0) + 1);
  }

  let result = 0;
  for (const [answer, count] of counter) {
    const groupCount = Math.ceil(count / (answer + 1));
    result += groupCount * (answer + 1);
  }
  return result;
}
