import axios from 'axios';

interface StatStatusPair {
  stat: {
    question_id: number;
    question__article__live: string | null;
    question__article__slug: string | null;
    question__article__has_video_solution: boolean | null;
    question__title: string;
    question__title_slug: string;
    question__hide: boolean;
    total_acs: number;
    total_submitted: number;
    frontend_question_id: number;
    is_new_question: number;
  };
  status: string | null;
  difficulty: {
    level: number;
  };
  paid_only: boolean;
  is_favor: boolean;
  frequency: number;
  progress: number;
}

interface GetLeetCodeAllQuestionResponse {
  user_name: string;
  num_solved: number;
  num_total: number;
  ac_easy: number;
  ac_medium: number;
  ac_hard: number;
  frequency_high: number;
  frequency_mid: number;
  category_slug: string;
  stat_status_pairs: StatStatusPair[];
}

export const getLeetCodeAllProblem = async () => {
  try {
    const {
      data: { stat_status_pairs: statStatusPairs },
    } = await axios.get<GetLeetCodeAllQuestionResponse>(`https://leetcode.com/api/problems/all`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip, deflate, br',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
        Cookie: process.env.LEETCODE_API_COOKIE,
      },
    });
    return statStatusPairs;
  } catch (error) {
    console.error(error);
    throw new Error('네트워크 요청에 실패하였습니다. 잠시 후에 다시 시도해주세요.');
  }
};

export const getLeetCodeSlugById = async (id: string) => {
  const allProblems = await getLeetCodeAllProblem();
  const problem = allProblems.find(
    ({ stat: { frontend_question_id } }) => frontend_question_id === +id,
  );
  if (problem === undefined) {
    throw new Error('LeetCode에 없는 문제 번호 입니다.');
  }

  return problem.stat.question__title_slug;
};
