/**
 * 1720. Decode XORed Array
 * https://leetcode.com/problems/decode-xored-array
 */
export function decode(encoded: number[], first: number): number[] {
  const arr = [first];
  encoded.forEach((num, i) => {
    arr.push(num ^ arr[i]);
  });
  return arr;
}
