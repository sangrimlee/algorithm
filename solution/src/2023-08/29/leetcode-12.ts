/**
 * 12. Integer to Roman
 * https://leetcode.com/problems/integer-to-roman
 */
export function intToRoman(num: number): string {
  const SYMBOLS = [
    { unit: 1000, symbol: 'M' },
    { unit: 900, symbol: 'CM' },
    { unit: 500, symbol: 'D' },
    { unit: 400, symbol: 'CD' },
    { unit: 100, symbol: 'C' },
    { unit: 90, symbol: 'XC' },
    { unit: 50, symbol: 'L' },
    { unit: 40, symbol: 'XL' },
    { unit: 10, symbol: 'X' },
    { unit: 9, symbol: 'IX' },
    { unit: 5, symbol: 'V' },
    { unit: 4, symbol: 'IV' },
    { unit: 1, symbol: 'I' },
  ] as const;

  let roman = '';
  let currentNum = num;
  for (const { unit, symbol } of SYMBOLS) {
    roman += symbol.repeat(Math.floor(currentNum / unit));
    currentNum %= unit;
  }
  return roman;
}
