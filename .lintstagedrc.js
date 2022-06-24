const path = require('path');

const joinFileNames = (fileNames, delimiter = ' ') =>
  fileNames.map((f) => path.relative(process.cwd(), f)).join(delimiter);

const eslintCommand = (fileNames) =>
  `yarn eslint --fix ${joinFileNames(fileNames)}`;

const prettierCommand = (fileNames) =>
  `yarn prettier --write ${joinFileNames(fileNames)}`;

const jestCommand = (fileNames) => `yarn jest ${joinFileNames(fileNames)}`;

module.exports = {
  '*.{js,ts,json,md}': [prettierCommand],
  '*.ts': [eslintCommand],
  '*.test.ts': [jestCommand],
};
