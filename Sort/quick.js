/**
 * 快速排序
 * 在数组选择一个基准点, 划分左小, 右大子集
 * 对子集数组在进行基准选择, 划分...直到划分完
 */

function quick(arr) {
  if (arr.length <= 1) return arr;

  // 这个基准的选择根据元素大小的分布密度联系起来,能更好的优化排序的速度
  let pivotIndex = Math.round(arr.length / 2)
  let pivotValue = arr.splice(pivotIndex, 1)[0]

  // 左右分区
  let leftArr = []
  let rightArr = []
  for (let i = 0; i < arr.length; i++) {
    arr[i] < pivotValue ? leftArr.push(arr[i]) : rightArr.push(arr[i])
  }

  // 递归调用
  return [...quick(leftArr), pivotValue, ...quick(rightArr)]
}

let arr = [...Array(100).keys()].sort(() => Math.random() - 0.5)
console.time('quick')
console.log(quick(arr))
console.timeEnd('quick') // 6.107ms