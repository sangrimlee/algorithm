import { getLeetCodeTestCases } from '../leetcode';

describe('@/api/test-case/leetcode', () => {
  describe('getLeetCodeTestCases', () => {
    it('LeetCode의 `content`를 파싱하여 테스트 케이스를 반환해야 한다.', () => {
      // https://leetcode.com/problems/two-sum
      const content = `<p>Given an array of integers <code>nums</code>&nbsp;and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p>\n\n<p>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, and you may not use the <em>same</em> element twice.</p>\n\n<p>You can return the answer in any order.</p>\n\n<p>&nbsp;</p>\n<p><strong class="example">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [2,7,11,15], target = 9\n<strong>Output:</strong> [0,1]\n<strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].\n</pre>\n\n<p><strong class="example">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [3,2,4], target = 6\n<strong>Output:</strong> [1,2]\n</pre>\n\n<p><strong class="example">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [3,3], target = 6\n<strong>Output:</strong> [0,1]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>2 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>\n\t<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>\n\t<li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li>\n\t<li><strong>Only one valid answer exists.</strong></li>\n</ul>\n\n<p>&nbsp;</p>\n<strong>Follow-up:&nbsp;</strong>Can you come up with an algorithm that is less than <code>O(n<sup>2</sup>)</code><font face="monospace">&nbsp;</font>time complexity?`;
      expect(getLeetCodeTestCases(content)).toEqual([
        {
          inputs: ['[2,7,11,15]', '9'],
          output: '[0,1]',
        },
        {
          inputs: ['[3,2,4]', '6'],
          output: '[1,2]',
        },
        {
          inputs: ['[3,3]', '6'],
          output: '[0,1]',
        },
      ]);
    });

    it('LeetCode의 변경된 `content`를 파싱하여 테스트 케이스를 반환해야 한다.', () => {
      // https://leetcode.com/problems/count-alternating-subarrays
      const content = `<p>You are given a <span data-keyword="binary-array">binary array</span> <code>nums</code>.</p>\n\n<p>We call a <span data-keyword="subarray-nonempty">subarray</span> <strong>alternating</strong> if <strong>no</strong> two <strong>adjacent</strong> elements in the subarray have the <strong>same</strong> value.</p>\n\n<p>Return <em>the number of alternating subarrays in </em><code>nums</code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class="example">Example 1:</strong></p>\n\n<div class="example-block">\n<p><strong>Input:</strong> <span class="example-io">nums = [0,1,1,1]</span></p>\n\n<p><strong>Output:</strong> <span class="example-io">5</span></p>\n\n<p><strong>Explanation:</strong></p>\n\n<p>The following subarrays are alternating: <code>[0]</code>, <code>[1]</code>, <code>[1]</code>, <code>[1]</code>, and <code>[0,1]</code>.</p>\n</div>\n\n<p><strong class="example">Example 2:</strong></p>\n\n<div class="example-block">\n<p><strong>Input:</strong> <span class="example-io">nums = [1,0,1,0]</span></p>\n\n<p><strong>Output:</strong> <span class="example-io">10</span></p>\n\n<p><strong>Explanation:</strong></p>\n\n<p>Every subarray of the array is alternating. There are 10 possible subarrays that we can choose.</p>\n</div>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>nums[i]</code> is either <code>0</code> or <code>1</code>.</li>\n</ul>\n`;
      expect(getLeetCodeTestCases(content)).toEqual([
        {
          inputs: ['[0,1,1,1]'],
          output: '5',
        },
        {
          inputs: ['[1,0,1,0]'],
          output: '10',
        },
      ]);
    });
  });
});
