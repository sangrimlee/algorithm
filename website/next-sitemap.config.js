/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.URL,
  generateRobotsTxt: true,
  exclude: ['*/_meta'],
};

module.exports = config;
