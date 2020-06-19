// 输入: 19
// 输出: true
// 解释:
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1

// 一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，
// 然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到 1。
// 如果可以变为 1，那么这个数就是快乐数。

/**
 * 分析: 显然我们需要重复执行数字替换操作, 对操作数的结果进行判断...
 * 这样先确定下来用递归去解题
 * 那么最重要的一点: 递归的终止条件怎么确定呢? 如果一直递归, 又如何防止栈溢出?
 */

// 解题步骤:
// 1.拆解数字
// 2.求每个数字的平方和
// 3.判断和是否为 1, 不是则继续对和调用函数
// 4.直到平方和为 1 或者可能进入死循环递归, 一直不为 1: 那么必定会出现重复的和值
// 我们可以把入参和值进行缓存, 如果重复了则判定进入死循环

function isHappyNumber(n) {
  // 用个闭包缓存入参
  const cache = Object.create(null)

  return handleNum(n, cache)
}

function handleNum(num, cache) {
  // 重复的入参
  if (cache[num]) {
    return false
  }

  // 流程处理
  let arr = num.toString().split('')
  let res = 0
  cache[num] = true

  arr.forEach(item => {
    // 平方和
    res += Math.pow(parseInt(item, 10), 2)
  });

  if (res === 1) {
    return true
  } else {
    return handleNum(res, cache)
  }
}

console.log(isHappyNumber(19))
console.log(isHappyNumber(20))
console.log(isHappyNumber(82))
