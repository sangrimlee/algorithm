import * as cheerio from 'cheerio';

import { TestCase } from '@/types';

function getTitle($: cheerio.CheerioAPI) {
  return $('li.algorithm-title').text().trim();
}

function getTestCases($: cheerio.CheerioAPI) {
  const $h5 = $('h5:contains("입출력 예")');
  const table = $h5.next();

  const testCases: TestCase[] = [];
  $(table)
    .find('tbody tr')
    .each((_, tr) => {
      const row: string[] = [];
      $(tr)
        .find('td')
        .each((_, td) => {
          row.push($(td).text());
        });
      const input = row.slice(0, -1);
      const output = row[row.length - 1];
      testCases.push({ input, output });
    });

  return testCases;
}

export function parseProgrammers(html: string) {
  const $ = cheerio.load(html);

  return {
    title: getTitle($),
    testCases: getTestCases($),
  };
}
