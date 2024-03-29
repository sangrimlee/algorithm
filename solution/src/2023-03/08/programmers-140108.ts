/**
 * 140108. 문자열 나누기
 * https://school.programmers.co.kr/learn/courses/30/lessons/140108
 */
export function splitString(s: string): number {
  const dfs = (startIndex = 0, totalCount = 0): number => {
    if (startIndex === s.length) {
      return totalCount;
    }
    let [currentIndex, diff] = [startIndex + 1, 1];
    while (0 < diff && currentIndex < s.length) {
      if (s[startIndex] === s[currentIndex]) {
        diff += 1;
      } else {
        diff -= 1;
      }
      currentIndex += 1;
    }
    return dfs(currentIndex, totalCount + 1);
  };

  return dfs();
}
