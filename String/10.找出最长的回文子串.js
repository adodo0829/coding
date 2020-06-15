/**
 * 给定一个字符串 s，找到 s 中最长的回文子串
 */

// 有思路吗? 获取并创建子串, 对子串进行判断
// 那这里的子串可以有很多呀, 怎么去划分情况?

// 利用动态规划思想: 通过组合子问题的解决，从而解决整个问题的算法
// 动态规划适用于子问题不是独立的情况，对每个子问题只求解一次，
// 使用数组来建立一张表格，来存放被分解成众多子问题的解，从而避免重复计算相同的子问题。

// 解题思路:
// 建立矩阵 dp
// 循环遍历字符串，取得不同长度的子串
// 不同长度的子串，根据不同的条件进行判断是否为回文子串
// （1）长度为 1，一定回文
// （2）长度为 2 或 3，判断首尾是否相同：s[i] === s[j]
// （3）长度 > 3, 首尾字符相同，且去掉首尾之后的子串仍为回文：(s[i] === s[j]) && dp[i + 1][j - 1]
// 取得长度最长的回文子串

function longestPalindrome(s) {
  // 建表: 建立结果集
  const dp = []
  for (let i = 0; i < s.length; i++) {
    dp[i] = []
  }
  
  // 最长 & 回文子串
  let subStr = ''
  let maxLen = 0

  for (let l = 0; l < s.length; l++) {
    // l: 表示为不同长度的子串

    for (let i = 0; i + l < s.length; i++) {
      // i:  substr首位下标
      // i + l: subsr末位下标
      let j = i + l

      // 分情况进行判断

      // 1.子串长度为1时为回文子串
      if (l === 0) {
        dp[i][j] = true
      }
      // 2.长度为2或3时，首尾字符相同则是回文子串
      else if (l <= 2) {
        dp[i][j] = s[i] === s[j]
      }
      // 3.长度大于3时,若首尾字符相同且去掉首尾之后的子串仍为回文,则为回文子串
      else {
        if (s[i] === s[j] && dp[i + 1][j - 1]) {
          dp[i][j] = true
        } else {
          dp[i][j] = false
        }
      }

      // 一轮子串循环校对结束
      if (dp[i][j] && l > maxLen) {
        maxLen = l
        subStr = s.substr(i, j + 1)
      }
    }
  }
  
  console.log(dp);
  console.log(subStr);
  return subStr
}

let s1 = 'adsdsadsadwedsaaadaaa'
let s2 = '  ada'

longestPalindrome(s1)
longestPalindrome(s2)