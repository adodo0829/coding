/**
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。
 * 找出那个只出现了一次的元素。
 * 输入: [2,3,1,3,2]
 * 输出: 1
 */

// 分析:
// 第一方案能想到的方法 就是遍历 + map对象, 然后取出对象中vakue=1 的key
function getOnlyValueOfArray(arr) {
  const hash = Object.create(null)

  const { length } = arr
  if (length === 0) return void 0

  for (let i = 0; i < length; i++) {
    hash[arr[i]] ? hash[arr[i]]++ : hash[arr[i]] = 1
  }

  console.log(hash)

  for (const key in hash) {
    if (hash[key] === 1) {
      return +key
    }
  }
}

let arr = [2, 3, 1, 3, 2]
let arr1 = [2, 3, 1, 3, 2, 1]

console.log(getOnlyValueOfArray(arr))
console.log(getOnlyValueOfArray(arr1))

// JS中还有一种按位异或运算 a ^ b: 相同二进制位相同则为 0, 不同则为 1;
// 由于同一个数的二进制位都相同, 经过异或位运算后必定为 0
// 而任何一个数与 0 异或后是他本身
// 异或运算遵循交换法
function getOnlyValueOfArrayOptimize(arr) {
  return arr.reduce((acc, cur) => {
    return acc ^ cur
  })
}

// 已经规定了数组的结构了, 不需要再判断什么异常情况
console.log(getOnlyValueOfArrayOptimize(arr))