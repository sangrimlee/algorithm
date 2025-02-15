/**
 * 2022. Convert 1D Array Into 2D Array
 * https://leetcode.com/problems/convert-1d-array-into-2d-array
 */
export function construct2DArray(original: number[], m: number, n: number): number[][] {
  if (original.length !== m * n) {
    return [];
  }
  const answer = Array.from({ length: m }).map(() => new Array<number>(n).fill(0));
  original.forEach((num, i) => {
    answer[Math.floor(i / n)][i % n] = num;
  });
  return answer;
}
