/**
 * 2578. Split With Minimum Sum
 * https://leetcode.com/problems/split-with-minimum-sum
 */
export function splitNum(num: number): number {
  function getDigits(num: number) {
    const digits = [];
    while (0 < num) {
      digits.push(num % 10);
      num = Math.floor(num / 10);
    }
    return digits;
  }

  const digits = getDigits(num).sort((a, b) => a - b);

  let [num1, num2] = [0, 0];
  digits.forEach((digit, i) => {
    if (i % 2 === 0) {
      num1 = num1 * 10 + digit;
    } else {
      num2 = num2 * 10 + digit;
    }
  });
  return num1 + num2;
}
