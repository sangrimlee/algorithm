import type { MetaRecord } from 'nextra';

const meta: MetaRecord = {
  index: {
    title: 'Introduction',
    theme: {
      collapsed: true,
      toc: false,
      pagination: false,
    },
  },
  leetcode: {
    title: 'LeetCode',
    theme: {
      collapsed: true,
    },
  },
  programmers: {
    title: 'Programmers',
    theme: {
      collapsed: true,
    },
  },
  '-- Site': {
    type: 'separator',
    title: 'More',
  },
  'leetcode-link': {
    title: 'LeetCode',
    href: 'https://leetcode.com/',
  },
  'programmers-link': {
    title: 'Programmers',
    href: 'https://programmers.co.kr/',
  },
};

export default meta;
