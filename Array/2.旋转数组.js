/**
 * 旋转数组
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数
 * 输入: [1,2,3,4,5,6,7] 和 k = 3
 * 输出: [5,6,7,1,2,3,4]
 */

// 分析: 从结果论看, 我们可以看做是元素移动的过程, 索引变化
// 当然这个还是要看 K 值, 在 0~arr.length 之间, 可以看做是切割, 组合
// 是 length 的倍数时, 则相当于元素移动

// 关键因子: K值

function rotateRightArray(arr, k) {
  const { length } = arr
  if (length === 0) return arr

  let array = Object.assign([], arr)

  let splitIndex = k % length

  if (splitIndex === 0) {
    return array
  } else {
    return [...array.slice(splitIndex, length), ...array.slice(0, splitIndex)]
  }
}

let arr1 = [1, 2, 3, 4, 5, 6, 7]

console.log(rotateRightArray(arr1, 4))
console.log(rotateRightArray(arr1, 1))
console.log(rotateRightArray(arr1, 7))

// 上面的方法申请了额外空间, 优化一下
function rotateRightArrayOptimize(arr, k) {
  const { length } = arr
  if (length === 0) return arr

  let index = k % length
  if (index === 0) return arr

  return [...arr.splice(length - index, index), ...arr]
}

console.log(rotateRightArrayOptimize([1,2,3,4], 3))