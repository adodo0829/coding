/**
 * 统计所有小于非负整数 n 的质数的数量
 */

// 输入: 10
// 输出: 4
// 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。

// 解析: 我们要搞懂质数的特性: 大于 1 的自然数, 只能被自己和 1 整除

function isPrime(num) {
  if (num < 2) return false

  for (let i = 2; i < num; i++) {
    // 这里还有优化的地方
    // 减少判断次数, 从 i 下手
    // 质数 2, 3, 5, 7...
    if (num % i === 0) return false
  }

  return true
}

function getPrimeCount(n) {
  let count = 0

  for (let i = 0; i <= n; i++) {
    if (isPrime(i)) count++
  }
  console.log(count);
  return count
}

getPrimeCount(10)