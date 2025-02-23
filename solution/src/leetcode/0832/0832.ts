/**
 * 832. Flipping an Image
 * https://leetcode.com/problems/flipping-an-image
 */
export function flipAndInvertImage(image: number[][]): number[][] {
  const invert = (nums: number[]) => nums.map((num) => 1 - num);
  return image.map((row) => invert(row.reverse()));
}
