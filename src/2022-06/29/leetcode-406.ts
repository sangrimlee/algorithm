/**
 * 406. Queue Reconstruction by Height
 * https://leetcode.com/problems/queue-reconstruction-by-height/
 */
export function reconstructQueue(people: number[][]): number[][] {
  const answer: number[][] = [];

  people.sort((a, b) => (a[0] !== b[0] ? b[0] - a[0] : a[1] - b[1]));

  people.forEach(([height, k]) => {
    answer.splice(k, 0, [height, k]);
  });

  return answer;
}
