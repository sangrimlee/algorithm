import { dedent } from 'ts-dedent';

import { CodingSite, TestCase } from '@/types';

export function createTestTemplate(
  codingSite: CodingSite,
  date: string,
  id: string,
  testCases: TestCase[] = [],
) {
  return dedent`describe('${date}: ${codingSite} ${id}', () => {
    ${testCases.map(createTestCaseTemplate).join('\n')}
  });`;
}

export function createTestCaseTemplate({ input, output }: TestCase, i: number) {
  return dedent`test('Example ${i + 1}', () => {
    expect(solution(${input.join(', ')})).toEqual(${output});
  });`;
}
