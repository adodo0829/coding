/**
 * string => int
 * 转换要求:
 *  字符串的有效部分以数字开头,符号开头满足范围要求的都返回整数
 *  其余返回 0
 */

// string 的正则方法
// String.prototype.match(pattern) 
//        根据pattern对字符串进行正则匹配, 返回匹配结果数组, 如匹配不到返回null
// String.prototype.replace(pattern, replacement) 
//        根据pattern进行正则匹配, 把匹配结果替换为replacement, 返回一个新的字符串

function stringToInt(str) {
  if (typeof str !== 'string' || str.trim() === '') return 0;

  // 匹配 str 中 第一位是-或+或都不是, 后面是数字的元素
  // ? 0或1 次
  let sArr = str.trim().match(/^(\+|-)?\d+/g)
  console.log(sArr)

  return sArr ? Number(sArr[0]) : 0
}

let s = ' 212 123 dasd3123ewq '
console.log(stringToInt(s));