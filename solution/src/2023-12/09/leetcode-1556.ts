/**
 * 1556. Thousand Separator
 * https://leetcode.com/problems/thousand-separator
 */
export function thousandSeparator(n: number): string {
  const str = n.toString();
  const lastIndex = str.length - 1;

  let answer = '';
  for (let i = lastIndex; 0 <= i; i--) {
    if (i !== lastIndex && (lastIndex - i) % 3 === 0) {
      answer = `${str[i]}.${answer}`;
    } else {
      answer = `${str[i]}${answer}`;
    }
  }
  return answer;
  /**
   * One Line Example
   * return n.toLocaleString().replace(/,/g, '.')
   */
}
