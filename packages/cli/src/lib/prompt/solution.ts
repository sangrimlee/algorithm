import inquirer from 'inquirer';

const SOLUTION_CHOICES = ['LeetCode', 'LeetCode Daily Challenge'] as const;

type SolutionChoice = (typeof SOLUTION_CHOICES)[number];

export async function solutionPrompt(): Promise<SolutionChoice> {
  const { choice } = await inquirer.prompt<{ choice: SolutionChoice }>({
    type: 'list',
    name: 'choice',
    message: '문제 생성 방식을 선택하세요.',
    choices: SOLUTION_CHOICES,
  });
  return choice;
}
