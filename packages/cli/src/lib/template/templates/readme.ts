export const README_TEMPLATE = `
# \`@algorithm/solution\`

## 문제 풀이 목록

### LeetCode

| 제목 | 풀이 |
| - | - |
{{#each leetcode}}
| [{{this.meta.id}}. {{this.meta.title}} ↗]({{this.meta.url}}) | [풀이 보기]({{this.relativePath}}) | 
{{/each}}

### Programmers

| 제목 | 풀이 |
| - | - |
{{#each programmers}}
| [{{this.meta.title}} ↗]({{this.meta.url}}) | [풀이 보기]({{this.relativePath}}) | 
{{/each}}
`;
