/**
 * 给定一个字符串，验证它是否是回文串，只考虑字母,下划线和数字字符,可以忽略字母的大小写
 * 空字符串定义为有效的回文串
 */

// 1.格式化处理字符串, 去除无效字符, 消除大小写等
// 2.前后位两两比较

function isPalindrome(str) {
  if (typeof str !== 'string') return

  // 格式化处理: 用正则检测出非数字和字符,然后进行替换
  // \w -> [a-zA-Z0-9_] 字符集
  let s = str.toLowerCase().replace(/\W/g, '')

  let arr = s.split('')
  const { length } = arr

  for (let i = 0; i < length / 2; i++) {
    // 首尾逐一比较
    if (arr[i] !== arr[length - 1 - i]) {
      return false
    }
  }

  return true
}

let test1 = ',,3123c  23 12QQdad 21 _21 q'
let test2 = '    '
let test3 = 'lLeell'
console.log(isPalindrome(test1))
console.log(isPalindrome(test2))
console.log(isPalindrome(test3))

// 翻转字符串后与原字符串进行比较也可以