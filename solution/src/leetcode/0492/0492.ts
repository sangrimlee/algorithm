/**
 * 492. Construct the Rectangle
 * https://leetcode.com/problems/construct-the-rectangle
 */
export function constructRectangle(area: number): number[] {
  const maxWidth = Math.floor(Math.sqrt(area));
  for (let width = maxWidth; 1 < width; width--) {
    if (area % width === 0) {
      return [area / width, width];
    }
  }
  return [area, 1];
}
