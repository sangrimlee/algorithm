/**
 * 71. Simplify Path
 * https://leetcode.com/problems/simplify-path
 */
export function simplifyPath(path: string): string {
  const paths = path.split(/\/+/g);
  const stack: string[] = [];
  for (const p of paths) {
    if (p === '.' || p === '') continue;
    if (p === '..') {
      stack.pop();
    } else {
      stack.push(p);
    }
  }
  return `/${stack.join('/')}`;
}
