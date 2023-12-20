/**
 * 93. Restore IP Addresses
 * https://leetcode.com/problems/restore-ip-addresses
 */
export function restoreIpAddresses(s: string): string[] {
  const answer: string[] = [];

  const isValid = (value: string) => {
    const numericValue = parseInt(value, 10);
    return 0 <= numericValue && numericValue <= 255 && value === numericValue.toString();
  };

  const backtrack = (current: string[], startIndex: number) => {
    if (current.length === 3) {
      const substr = s.substring(startIndex);
      if (isValid(substr)) {
        answer.push([...current, substr].join('.'));
      }
      return;
    }
    for (let endIndex = startIndex; endIndex < Math.min(startIndex + 3, s.length); endIndex++) {
      const substr = s.substring(startIndex, endIndex + 1);
      if (isValid(substr)) {
        current.push(substr);
        backtrack(current, endIndex + 1);
        current.pop();
      }
    }
  };

  backtrack([], 0);
  return answer;
}
