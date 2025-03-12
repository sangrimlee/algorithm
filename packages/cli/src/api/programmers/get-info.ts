import * as cheerio from 'cheerio';

import type { TestCase } from '@/types';

function getContentData($: cheerio.CheerioAPI): { title: string; level: number } {
  const title = String($('.lesson-content').data('lessonTitle'));
  const level = Number($('.lesson-content').data('challengeLevel'));
  return {
    title,
    level,
  };
}

function getCodeSnippet($: cheerio.CheerioAPI): string {
  const $h5 = $('h5:contains("입출력 예")');
  const table = $h5.next();
  const args = table
    .find('thead')
    .find('th')
    .toArray()
    .slice(0, -1)
    .map((th) => $(th).text());
  return `function solution(${args.join(', ')}){}`;
}

function getTestCases($: cheerio.CheerioAPI): TestCase[] {
  const $h5 = $('h5:contains("입출력 예")');
  const table = $h5.next();

  return $(table)
    .find('tbody tr')
    .toArray()
    .map((tr) => {
      const row: string[] = [];
      $(tr)
        .find('td')
        .each((_, td) => {
          row.push($(td).text());
        });
      const inputs = row.slice(0, -1);
      const output = row[row.length - 1];
      return { inputs, output };
    });
}

export function getProgrammersInfo(html: string) {
  const $ = cheerio.load(html);
  const { title, level } = getContentData($);

  return {
    title,
    level,
    testCases: getTestCases($),
    codeSnippet: getCodeSnippet($),
  };
}
