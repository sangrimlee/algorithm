/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.URL ?? '',
  generateRobotsTxt: true,
  exclude: ['*/_meta'],
};

export default config;
