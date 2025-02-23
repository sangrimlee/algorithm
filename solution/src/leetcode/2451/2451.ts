/**
 * 2451. Odd String Difference
 * https://leetcode.com/problems/odd-string-difference
 */
export function oddString(words: string[]): string {
  function getDifference(word: string): string {
    let difference = '';
    for (let i = 0; i < word.length - 1; i++) {
      difference += `${(word.charCodeAt(i + 1) - word.charCodeAt(i)).toString()}_`;
    }
    return difference;
  }

  const differences = new Map<string, string[]>();
  for (const word of words) {
    const difference = getDifference(word);
    if (!differences.has(difference)) {
      differences.set(difference, [word]);
    } else {
      differences.get(difference)?.push(word);
    }
  }

  for (const wordsByDifference of differences.values()) {
    if (wordsByDifference.length === 1) {
      return wordsByDifference[0];
    }
  }
  return '';
}
