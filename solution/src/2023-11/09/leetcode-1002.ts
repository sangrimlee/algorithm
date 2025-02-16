/**
 * 1002. Find Common Characters
 * https://leetcode.com/problems/find-common-characters
 */
export function commonChars(words: string[]): string[] {
  const charCounter = (word: string) => {
    const counter = new Map<string, number>();
    for (const char of word) {
      counter.set(char, (counter.get(char) ?? 0) + 1);
    }
    return counter;
  };

  const intersect = (counter1: Map<string, number>, counter2: Map<string, number>) => {
    const intersected = new Map<string, number>();
    for (const [char, count1] of counter1.entries()) {
      const count2 = counter2.get(char);
      if (count2) {
        intersected.set(char, Math.min(count1, count2));
      }
    }
    return intersected;
  };

  const counter = words.reduce(
    (prev, word) => intersect(prev, charCounter(word)),
    charCounter(words[0]),
  );

  return [...counter.entries()].flatMap(([char, count]) => new Array<string>(count).fill(char));
}
