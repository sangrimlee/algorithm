import inquirer from 'inquirer';

export async function inputProblemNumberPrompt() {
  const { problemNumber } = await inquirer.prompt<{ problemNumber: string }>({
    type: 'input',
    name: 'problemNumber',
    message: '문제 번호를 입력하세요.',
  });
  return problemNumber;
}
