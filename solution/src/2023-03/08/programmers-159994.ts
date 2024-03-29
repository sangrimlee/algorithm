/**
 * 159994. 카드 뭉치
 * https://school.programmers.co.kr/learn/courses/30/lessons/159994
 */
export function bundleOfCards(cards1: string[], cards2: string[], goal: string[]): 'Yes' | 'No' {
  let [idx1, idx2] = [0, 0];

  for (const word of goal) {
    if (cards1[idx1] !== word && cards2[idx2] !== word) {
      return 'No';
    }
    if (cards1[idx1] === word) {
      idx1 += 1;
    } else {
      idx2 += 1;
    }
  }

  return 'Yes';
}
