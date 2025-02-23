/**
 * 1598. Crawler Log Folder
 * https://leetcode.com/problems/crawler-log-folder
 */
export function minOperations(logs: string[]): number {
  let operations = 0;
  logs.forEach((log) => {
    if (log === './') return;
    if (log === '../') {
      operations = Math.max(0, operations - 1);
    } else {
      operations += 1;
    }
  });
  return operations;
}
