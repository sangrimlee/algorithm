/**
 * 1415. The k-th Lexicographical String of All Happy Strings of Length n
 * https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n
 */
export function getHappyString(n: number, k: number): string {
  const totalCount = 3 * (1 << (n - 1));
  if (totalCount < k) {
    return '';
  }

  let currentIndex = k - 1;
  let currentSize = 1 << (n - 1);
  let char = getNextCharacter(currentIndex, currentSize);
  let answer = char;
  while (1 < currentSize) {
    currentIndex %= currentSize;
    currentSize >>= 1;
    char = getNextCharacter(currentIndex, currentSize, char);
    answer += char;
  }
  return answer;
}

function getNextCharacter(i: number, size: number, prevChar = '') {
  const group = Math.floor(i / size);
  switch (prevChar) {
    case 'a':
      return ['b', 'c'][group];
    case 'b':
      return ['a', 'c'][group];
    case 'c':
      return ['a', 'b'][group];
    default:
      return ['a', 'b', 'c'][group];
  }
}
