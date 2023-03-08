import axios from 'axios';
import * as cheerio from 'cheerio';
import { TestCase } from '../types';

const getTitleFromHTML = ($: cheerio.CheerioAPI) => {
  return $('li.algorithm-title').text().trim();
};

const getTestCaseFromHTML = ($: cheerio.CheerioAPI) => {
  const table = $('table');

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
};

export const getProgrammersProblem = async (id: string) => {
  try {
    const { data: html } = await axios.get<string>(
      `https://school.programmers.co.kr/learn/courses/30/lessons/${id}`,
      {
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
        },
      },
    );
    const $ = cheerio.load(html);
    return {
      title: getTitleFromHTML($),
      testCases: getTestCaseFromHTML($),
    };
  } catch (error) {
    throw new Error(
      '문제를 불러오는 중에 오류가 발생하였습니다.\n문제 번호를 다시 확인하거나, 아래 에러를 확인해주세요.',
    );
  }
};
