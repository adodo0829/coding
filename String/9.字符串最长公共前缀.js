/**
 * 最长公共前缀
 * 编写一个函数来查找字符串数组中的最长公共前缀
 * 没有这返回空串
 */

// 分析: 最长 & 公共 -> 子集
// 子集去匹配数组每一项
// 子集怎么取, 长度为1满足 递增+1, 再判断, 直到其中之一不满足
function findLongestPrefix(strArray) {
  if (!Array.isArray(strArray)) return
  const { length } = strArray
  if (length === 0) return ''

  let str = strArray[0][0]
  let res
  let flag = 1
  let runing = true
  let isFirst = true
  // 逐一扫描, 用字符索引来定位
  while (runing) {
    for (let i = 1; i < length; i++) {
      if (isFirst) {
        if (strArray[i].indexOf(str) !== 0) {
          runing = false
          return '空'
        }
      } else {
        if (strArray[i].indexOf(str) !== 0) {
          runing = false
          return res
        }
      }
    }
    // 第一位是公共子集, 递增再次扫描
    res = str
    str = strArray[0].substr(0, flag++)
    console.log('str:', str);
    if (isFirst) {
      isFirst = false
    }
    if (str.length === strArray[0].length) {
      runing = false
      return str
    }
  }
}

let arr = ['ddad', 'ddsadasd', 'ddddsadssssasd', 'ddad', 'dddwqeaadsd']

console.log('result:', findLongestPrefix(arr))

// 怎么讲代码优化下
// 我们扫描的时候是用的 子串去验证
// 换个思路: 
// 倒推一下, 子串每个字符的索引位置与每一项的位置一致, 我们用这个判断是不是更好
function findLongestPrefixOptimiz(strArray) {
  if (!Array.isArray(strArray)) return

  const { length } = strArray
  if (length === 0) return ''

  let curr = 0
  let isRunning = true
  let str = strArray[0] // 还是以第一项为基准

  // 扫描完毕, 会得到一个扫描值: curr
  while (isRunning) {

    if (curr < str.length) {
      let char = str.charAt(curr)

      for (let i = 1; i < length; i++) {
        // 对比同位字符
        if (char !== strArray[i].charAt(curr) || strArray[i].length <= i) {
          isRunning = false
          break // 找到了准确的 curr
        }
      }
    } else {
      isRunning = false
    }
    // 一轮过后
    curr++
  }
  // 扫描结束
  return str.substr(0, curr - 1)
}

console.log('resOptimize', findLongestPrefixOptimiz(arr));

// 两个结果一样
// 不过下面的写法用好看点, 本质都是 while 扫描, 判断, 中断, 返回值