/**
 * 1980. Find Unique Binary String
 * https://leetcode.com/problems/find-unique-binary-string
 */
export function findDifferentBinaryString(nums: string[]): string {
  const n = nums.length;
  const answer: string[] = [];
  for (let i = 0; i < n; i++) {
    const curr = nums[i][i]; // i번째 문자열의 i번째 비트 선택
    answer.push(curr === '0' ? '1' : '0'); // 비트를 반전
  }
  return answer.join('');
}
