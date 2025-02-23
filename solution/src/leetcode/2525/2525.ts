/**
 * 2525. Categorize Box According to Criteria
 * https://leetcode.com/problems/categorize-box-according-to-criteria
 */
export function categorizeBox(length: number, width: number, height: number, mass: number): string {
  const dimensions = [length, width, height];
  const volume = length * width * height;
  const isBulky = dimensions.some((d) => d >= 10 ** 4) || volume >= 10 ** 9;
  const isHeavy = mass >= 100;

  if (isBulky && isHeavy) {
    return 'Both';
  }
  if (!isBulky && !isHeavy) {
    return 'Neither';
  }
  return isBulky ? 'Bulky' : 'Heavy';
}
