/**
 * 762. Prime Number of Set Bits in Binary Representation
 * https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation
 */
export function countPrimeSetBits(left: number, right: number): number {
  const countBit = (num: number) => {
    return num.toString(2).replace(/0/g, '').length;
  };
  const isPrime = (num: number) => {
    return (
      num === 2 ||
      num === 3 ||
      num === 5 ||
      num === 7 ||
      num === 11 ||
      num === 13 ||
      num === 17 ||
      num === 19
    );
  };

  let answer = 0;
  for (let num = left; num <= right; num++) {
    if (isPrime(countBit(num))) {
      answer += 1;
    }
  }
  return answer;
}
