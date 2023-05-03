const path = require('path');

const joinFileNames = (fileNames, delimiter = ' ') =>
  fileNames.map((f) => path.relative(process.cwd(), f)).join(delimiter);

const eslintCommand = (fileNames) => `pnpm eslint --fix ${joinFileNames(fileNames)}`;

const prettierCommand = (fileNames) => `pnpm prettier --write ${joinFileNames(fileNames)}`;

module.exports = {
  '*.{js,ts,json,md}': [prettierCommand],
  '*.ts': [eslintCommand],
};
