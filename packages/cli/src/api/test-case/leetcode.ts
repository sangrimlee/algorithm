import * as cheerio from 'cheerio';

import type { TestCase } from '@/api/test-case';

function parseInputs(text: string): string[] {
  const inputMatched = /Input: (.*)/.exec(text);
  if (!inputMatched) {
    return [];
  }
  return inputMatched[1]
    .trim()
    .split(', ')
    .map((v) => v.replace(/^.*= /, '').trim());
}

function parseOutput(text: string): string {
  const outputMatched = /Output: (.*)/.exec(text);
  if (!outputMatched) {
    return '';
  }
  return outputMatched[1].trim();
}

export function getLeetCodeTestCases(content: string): TestCase[] {
  const $ = cheerio.load(content);
  return $('pre,div.example-block')
    .toArray()
    .map((element) => {
      const text = $(element).text();
      return {
        inputs: parseInputs(text),
        output: parseOutput(text),
      };
    });
}
