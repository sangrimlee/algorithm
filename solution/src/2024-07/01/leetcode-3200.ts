/**
 * 3200. Maximum Height of a Triangle
 * https://leetcode.com/problems/maximum-height-of-a-triangle
 */
export function maxHeightOfTriangle(red: number, blue: number): number {
  return Math.max(getMaxHeight(red, blue), getMaxHeight(blue, red));
}

function getMaxHeight(first: number, second: number) {
  const balls = [first, second];
  let currentSize = 1;
  let currentIndex = 0;
  while (currentSize <= balls[currentIndex]) {
    balls[currentIndex] -= currentSize;
    currentSize += 1;
    currentIndex ^= 1;
  }
  return currentSize - 1;
}
