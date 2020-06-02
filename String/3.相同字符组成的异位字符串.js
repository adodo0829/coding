/**
 * 给定两个字符串 s 和 t, 编写一个函数来判断 t 是否是 s 的字母异位词
 * 即: sadsa 和 ssaad, 成员一致
 */

// 分析特性:
// 长度一致, 成员项一致
function isSameEleString(str1, str2) {
  if (typeof str1 !== 'string' && typeof str2 !== 'string') return false
  if (str1.length !== str2.length) return false // 长度一致
  // 成员项一致
  let hashMap = Object.create(null)

  // 先计算其中一个字符串每个元素的次数, 做加法
  for (const ele of str1) {
    // hashMap[ele] = hashMap[ele] || 0
    // hashMap[ele]++
    hashMap[ele] = hashMap[ele] ? ++hashMap[ele] : 1
  }

  // 再计算另一个一个字符串每个元素的次数, 做减法
  for (const ele of str2) {
    // if (ele in hashMap) {
    //   hashMap[ele] = --hashMap[ele]
    // }
    // 如果不存在 ele, 坑爹不是啊
    // 如果被减到 0, 又来了一个, 那肯定多余了
    if (!hashMap[ele]) return false
    // 存在的话
    --hashMap[ele]
  }

  console.log(hashMap)
  return true
  // 这里还可以做一下优化, 在上面判断中就可以直接返回
  // console.log(!Object.values(hashMap).some(v => v !== 0))
  // return !Object.values(hashMap).some(v => v !== 0)
}

let s1 = 'asdadwadd'
let s2 = 'dsadadadd'

console.log(isSameEleString(s1, s2))


// for of
// 这个方法避开了 for-in 循环的所有缺陷
// 与 forEach 不同的是，它可以正确响应 break、continue 和 return 语句
// 其不仅可以遍历数组，还可以遍历类数组对象和其他`可迭代对象`