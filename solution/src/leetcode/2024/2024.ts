/**
 * 2024. Maximize the Confusion of an Exam
 * https://leetcode.com/problems/maximize-the-confusion-of-an-exam
 */
export function maxConsecutiveAnswers(answerKey: string, k: number): number {
  const n = answerKey.length;
  const counter = new Map<string, number>();

  const getCount = (key: string) => {
    return counter.get(key) ?? 0;
  };
  const addCount = (key: string) => {
    counter.set(key, getCount(key) + 1);
  };
  const subCount = (key: string) => {
    counter.set(key, getCount(key) - 1);
  };

  let maxSize = 0;
  for (let right = 0; right < n; right++) {
    addCount(answerKey[right]);
    if (Math.min(getCount('T'), getCount('F')) <= k) {
      maxSize += 1;
    } else {
      subCount(answerKey[right - maxSize]);
    }
  }
  return maxSize;
}
