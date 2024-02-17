/**
 * 306. Additive Number
 * https://leetcode.com/problems/additive-number
 */
export function isAdditiveNumber(num: string): boolean {
  function sum(a: string, b: string): string {
    return String(BigInt(a) + BigInt(b));
  }

  function dfs(currentIndex: number, num: string, results: string[]) {
    if (currentIndex === num.length && 3 <= results.length) {
      return true;
    }
    for (let i = currentIndex; i <= num.length; i++) {
      if (currentIndex !== i && num[currentIndex] === '0') {
        return false;
      }
      const result = num.substring(currentIndex, i + 1);
      if (
        results.length <= 1 ||
        result === sum(results[results.length - 2], results[results.length - 1])
      ) {
        results.push(result);
        if (dfs(i + 1, num, results)) {
          return true;
        }
        results.pop();
      }
    }
    return false;
  }

  return dfs(0, num, []);
}
