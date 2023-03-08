import * as cheerio from 'cheerio';

import { TestCase } from '@/types';

function getTestCases($: cheerio.CheerioAPI) {
  const testCases: TestCase[] = [];

  $('pre').each((_, pre) => {
    const [inputs, output] = $(pre)
      .children()
      .remove()
      .end()
      .text()
      .split('\n')
      .map((str) => str.trim());
    const input = inputs.split(',').map((v) => v.replace(/^.*= /, '').trim());
    testCases.push({ input, output });
  });

  return testCases;
}

export function parseLeetCode(html: string) {
  const $ = cheerio.load(html);

  return {
    testCases: getTestCases($),
  };
}
