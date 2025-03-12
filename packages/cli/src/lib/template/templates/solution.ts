export const SOLUTION_TEMPLATE = `
/**
 * {{id}}. {{title}}
 * {{url}}
 */
{{#if codeSnippet}}
export {{removeComments codeSnippet}}
{{else}}
export function solution(){}
{{/if}}`;

export const SOLUTION_TEST_TEMPLATE = `
import { {{funcName codeSnippet}} } from './{{fileName}}';

describe('{{siteName}} {{fileName}}', () => {
  {{#each testCases}}
  test('Example {{add @index 1}}', () => {
    expect({{funcName ../codeSnippet}}({{{this.inputs}}})).toEqual({{{this.output}}});
  });
  {{else}}
  test('Example 1', () => {})
  {{/each}}
});`;
