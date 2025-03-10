export const README_TEMPLATE = `
# \`@algorithm/solution\`

## 문제 풀이 목록

### LeetCode

| 제목 | 풀이 |
| - | - |
{{#each leetcode}}
| [{{this.id}}. {{this.title}} ↗]({{this.url}}) | [풀이 보기]({{this.relativePath}}) | 
{{/each}}

### Programmers

| 제목 | 풀이 |
| - | - |
{{#each programmers}}
| [{{this.title}} ↗]({{this.url}}) | [풀이 보기]({{this.relativePath}}) | 
{{/each}}
`;
