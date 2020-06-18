/**
 * 给定一个Excel表格中的列名称，返回其相应的列序号。
 */

/**
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28
输入: "A",
输出: 1
输入: "AB",
输出: 28
 */

// 分析: 
//       A -> 1
//       B -> 2
//       ...
//       Z -> 26
//       AB -> 28 = 26^1 * A + 26^0 * B
// 有没有熟悉的感觉, 其实就是让你实现进制转换: 26 进制 -> 10 进制

// 我们需要准备一个映射表
function excelColumnTo10(column) {
  if (!column.trim()) return 0

  let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let map = {}
  for (const key of str) {
    map[key] = str.indexOf(key) + 1
  }
  let len = column.length - 1
  let arr = column.split('')

  return arr.reduce((acc, cur, index) => {
    return acc += map[cur] * (26 ** (len - index))
  }, 0)
  
}

let c = 'AB'
let c1 = 'BC'
let c2 = 'AZ'
console.log(excelColumnTo10(c))
console.log(excelColumnTo10(c1))
console.log(excelColumnTo10(c2))