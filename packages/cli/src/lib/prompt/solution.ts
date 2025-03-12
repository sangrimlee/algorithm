import { select } from '@inquirer/prompts';

type SolutionChoice = 'LeetCode' | 'LeetCode Daily Challenge' | 'Programmers';

export async function solutionPrompt(): Promise<SolutionChoice> {
  const answer = await select<SolutionChoice>({
    message: '문제 생성 방식을 선택하세요.',
    choices: [
      { value: 'LeetCode', description: 'LeetCode 템플릿 생성' },
      {
        value: 'LeetCode Daily Challenge',
        description: 'LeetCode Daily Challenge 템플릿 생성',
      },
      {
        value: 'Programmers',
        description: 'Programmers 템플릿 생성',
      },
    ],
  });
  return answer;
}
