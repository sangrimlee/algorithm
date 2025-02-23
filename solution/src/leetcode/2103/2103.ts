/**
 * 2103. Rings and Rods
 * https://leetcode.com/problems/rings-and-rods
 */
export function countPoints(rings: string): number {
  const rods = new Array(10).fill(0);
  for (let i = 0; i < rings.length; i += 2) {
    const color = rings[i];
    const position = parseInt(rings[i + 1]);
    rods[position] |= color === 'R' ? 1 : color === 'G' ? 2 : 4;
  }
  return rods.filter((rod) => rod === 7).length;
}
