/**
 * 给定一个整数，写一个函数来判断它是否是 3 的幂次方
 */

// 分析: 3 的幂次方: 3^0, 3^1, ..., 3^n, 怎么去判断呢?
// 除了 1 之外的幂次方数应该是一直能被 3 整除的

function isPowerOf3(num) {
  if (num < 1) return false

  // 以 num 递减为终止条件
  while (num > 1) {
    if (num % 3 !== 0) {
      return false
    } else {
      num = num / 3
    }
  }
  // 当 num 一直除到为 1 时
  return true
}

console.log(isPowerOf3(1));
console.log(isPowerOf3(2));
console.log(isPowerOf3(27));