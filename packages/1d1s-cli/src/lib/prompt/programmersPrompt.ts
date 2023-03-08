import inquirer from 'inquirer';

export async function programmersPrompt() {
  const { problemNumber } = await inquirer.prompt<{ problemNumber: string }>({
    type: 'input',
    name: 'problemNumber',
    message: '프로그래머스의 문제 번호를 입력하세요.',
  });
  return problemNumber;
}
