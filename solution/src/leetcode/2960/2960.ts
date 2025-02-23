/**
 * 2960. Count Tested Devices After Test Operations
 * https://leetcode.com/problems/count-tested-devices-after-test-operations
 */
export function countTestedDevices(batteryPercentages: number[]): number {
  let testedDevice = 0;
  for (const batteryPercentage of batteryPercentages) {
    if (testedDevice < batteryPercentage) {
      testedDevice += 1;
    }
  }
  return testedDevice;
}
