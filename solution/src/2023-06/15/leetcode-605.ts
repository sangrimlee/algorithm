/**
 * 605. Can Place Flowers
 * https://leetcode.com/problems/can-place-flowers
 */
export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let flowerCount = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] !== 0) {
      continue;
    }

    const isLeftEmpty = i === 0 || flowerbed[i - 1] === 0;
    const isRightEmpty = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

    if (isLeftEmpty && isRightEmpty) {
      flowerbed[i] = 1;
      flowerCount += 1;
    }

    if (n <= flowerCount) {
      return true;
    }
  }

  return n <= flowerCount;
}
