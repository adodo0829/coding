/**
 * 一维数组转化二维分段数组
 * @param arr
 * @param gap 分段基数
 */
function transformArray(arr, gap = 5) {
  if (!Array.isArray(arr)) return
  const { length } = arr
  let result = []
  let startIndex = 0
  let endIndex = 0

  if (length <= gap) {
    result.push(arr)
    return result
  }

  for (let i = 0; i < length; i++) {
    if ((i + 1) % gap === 0) {
      endIndex = i
      result.push(arr.slice(startIndex, endIndex + 1))
      startIndex = i + 1
    }
  }
  
  if (length % gap !== 0) {
    result.push(arr.slice(endIndex+1, length))
  }
  console.log(result);
  // return result
}

let array = [1, 2, 3, 4, 5, 6, 7, 8]
transformArray(array, 5)