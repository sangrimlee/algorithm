/**
 * 1710. Maximum Units on a Truck
 * https://leetcode.com/problems/maximum-units-on-a-truck/
 */
export function maximumUnits(boxTypes: number[][], truckSize: number): number {
  boxTypes.sort((a, b) => b[1] - a[1]);

  let answer = 0;
  let currentIndex = 0;
  while (currentIndex < boxTypes.length && 0 < truckSize) {
    const [numberOfBoxes, numberOfUnitsPerBox] = boxTypes[currentIndex];
    answer += Math.min(truckSize, numberOfBoxes) * numberOfUnitsPerBox;
    truckSize -= numberOfBoxes;
    currentIndex += 1;
  }

  return answer;
}
