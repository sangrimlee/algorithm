/**
 * 2601. Prime Subtraction Operation
 * https://leetcode.com/problems/prime-subtraction-operation
 */
export function primeSubOperation(nums: number[]): boolean {
  const n = nums.length;
  const maxElement = nums.reduce((prev, num) => Math.max(prev, num), 0);
  const isValid = new Array<boolean>(maxElement + 1).fill(true);
  isValid[1] = false;
  for (let i = 2; i <= Math.sqrt(maxElement + 1); i++) {
    if (!isValid[i]) continue;
    for (let j = i * i; j <= maxElement; j += i) {
      isValid[j] = false;
    }
  }

  let currentValue = 1;
  let currentIndex = 0;
  while (currentIndex < n) {
    const difference = nums[currentIndex] - currentValue;
    if (difference < 0) {
      return false;
    }
    if (isValid[difference] || difference === 0) {
      currentIndex += 1;
    }
    currentValue += 1;
  }
  return true;
}
