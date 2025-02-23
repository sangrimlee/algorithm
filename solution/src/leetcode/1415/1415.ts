/**
 * 1415. The k-th Lexicographical String of All Happy Strings of Length n
 * https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n
 */
export function getHappyString(n: number, k: number): string {
  const totalCount = 3 * 2 ** (n - 1);
  if (totalCount < k) {
    return '';
  }

  let result = '';
  let [remainK, currentIndex, currentChar] = [k - 1, 0, ''];
  while (currentIndex < n) {
    [remainK, currentIndex, currentChar] = getNextStep(n, remainK, currentIndex, currentChar);
    result += currentChar;
  }
  return result;
}

function getNextStep(
  n: number,
  remainK: number,
  currentIndex: number,
  currentChar: string,
): [number, number, string] {
  const nextChars: Record<string, string[]> = {
    a: ['b', 'c'],
    b: ['a', 'c'],
    c: ['a', 'b'],
  };
  const currentSize = 2 ** (n - currentIndex - 1);
  const charIndex = Math.floor(remainK / currentSize);
  const nextChar =
    currentChar !== '' ? nextChars[currentChar][charIndex] : ['a', 'b', 'c'][charIndex];

  return [remainK % currentSize, currentIndex + 1, nextChar];
}
