import inquirer from 'inquirer';

export async function choiceGenereateTypePrompt() {
  const { type } = await inquirer.prompt<{ type: string }>({
    type: 'list',
    name: 'type',
    message: '문제 생성 방식을 선택하세요.',
    choices: ['LeetCode', 'LeetCode Daily Challenge', 'Programmers'],
  });
  return type;
}
