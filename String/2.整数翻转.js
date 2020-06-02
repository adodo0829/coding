/**
 * 整数翻转
 * 整数: 正负符号
 * 把一个`有效位`数字倒序排列, 可以转成字符串, 处理好了再转回来
 */

function reverseNumber(n) {
  if (typeof n !== 'number') return
  // 整数极值
  let Max = Number.MAX_SAFE_INTEGER
  let Min = Number.MIN_SAFE_INTEGER
  if (n > Max || n < Min) {
    throw new Error('n is out of int range')
  }

  let isNegative = n < 0
  // O(n)
  let num = Math.abs(n).toString().split('').reverse().join('')

  return isNegative ? -num : +num
}
let n = -12345
let m = Number.MAX_SAFE_INTEGER + 1
console.log(reverseNumber(n));
console.log(reverseNumber(m));