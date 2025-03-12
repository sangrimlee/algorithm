import { logger } from '@/utils/logger';

import axios from 'axios';
import { getProgrammersInfo } from './get-info';

export const getProgrammersQuestionById = async (id: string) => {
  try {
    const { data: html } = await axios.get<string>(
      `https://school.programmers.co.kr/learn/courses/30/lessons/${id}?language=javascript`,
      {
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
        },
      },
    );
    const info = getProgrammersInfo(html);
    return {
      id,
      url: `https://school.programmers.co.kr/learn/courses/30/lessons/${id}`,
      ...info,
    };
  } catch (error) {
    logger.error(error);
    throw new Error('문제를 불러오는 중에 오류가 발생하였습니다. 문제 번호를 확인해주세요.');
  }
};
