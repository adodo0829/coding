/**
 * 字符串中首个唯一项, 返回其索引
 * 关键词: 唯一, 首个
 * 如何去判断唯一? 可以对值计数
 * 首个? 遍历对象, 取值为 1 的键
 */

function getFirstAndOnlyone(str) {
  if (typeof str !== 'string' || !str.trim()) return

  let hash = Object.create(null)

  for (const key of str) {
    hash[key] = hash[key] ? ++hash[key] : 1
  }
  
  // let result = Object.entries(hash).filter(item => {
  //   return item[1] === 1
  // })
  // return result.length === 0 ? -1 : str.indexOf(result[0][0])

  for (let i = 0; i < str.length; i++) {
    if (hash[str[i]] === 1) {
      return i
    }
  }

  return -1
}

let s = 'wqeweqgfewqeses'
console.log(getFirstAndOnlyone(s))