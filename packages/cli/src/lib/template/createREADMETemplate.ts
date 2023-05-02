import { CodingSite, Solution } from '@/types';

function createSolutionRowTemplate({ id, title, url, relativePath }: Solution) {
  return `| ${id} | [${title}](${url}) | [풀이](${relativePath}) |`;
}

export function createSolutionTableTemplate(codingSite: CodingSite, solutions: Solution[]) {
  return `
### ${codingSite}

| #   | Title | Solution |
| --- | ----- | -------- |
${solutions.map(createSolutionRowTemplate).join('\n')}
`;
}

export function createREADMETemplate(groups: Map<CodingSite, Solution[]>) {
  let template = `# Solution\n\n## 문제 풀이 목록`;

  for (const [codingSite, solutions] of groups) {
    template += createSolutionTableTemplate(codingSite, solutions);
  }
  return template;
}
