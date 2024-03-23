import axios from 'axios';

interface GetLeetCodeAllProblemResponse {
  acRate: number;
  difficulty: string;
  likes: number;
  dislikes: number;
  categoryTitle: string;
  frontendQuestionId: string;
  paidOnly: boolean;
  title: string;
  titleSlug: string;
  topicTags: Array<{ name: string; id: string; slug: string }>;
  hasSolution: boolean;
  hasVideoSolution: boolean;
  totalAcceptedRaw: number;
  totalSubmissionRaw: number;
}

const getLeetCodeAllProblem = async () => {
  const { data } = await axios.get<Record<string, GetLeetCodeAllProblemResponse>>(
    'https://raw.githubusercontent.com/bunnyxt/lcid/main/problems_all.json',
  );
  return data;
};

export const getLeetCodeSlugById = async (id: string) => {
  const allProblem = await getLeetCodeAllProblem();
  const titleSlug = allProblem[id].titleSlug;
  if (!titleSlug) {
    throw new Error('LeetCode에 없는 문제 번호 입니다.');
  }
  return titleSlug;
};
