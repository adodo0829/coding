/**
 * 写一个程序，输出从 1 到 n 数字的字符串表示。
 * 如果 n 是 3 的倍数，输出“Fizz”；
 * 如果 n 是 5 的倍数，输出“Buzz”；
 * 如果 n 同时是 3 和 5 的倍数，输出 “FizzBuzz”。
 */

/**
 * n = 15时, return 值如下
 * [
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
  ]
 */

// 思路解析: 输入一个数字 n, 输出其 n 项字符组成,3 的倍数 f, 5 的倍数 b, 15 的倍数 fb, 以此类推...

// 这个需求好像遍历一遍即可完成
function numToAssignedString(n) {
  if (n < 1) return

  const res = []

  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      res.push('FB')
    } else if (i % 3 === 0) {
      res.push('F')
    } else if (i % 5 === 0) {
      res.push('B')
    } else {
      res.push(String(i))
    }
  }

  console.log(res);
}

numToAssignedString(15)