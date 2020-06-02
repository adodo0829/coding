/**
 * 插入排序: 假设左边已排序, 从右边找一项插到左边
 * 分析: 左边刚开始只有一个值, 新加入一个元素左边也需要进行排序
 * 要找到右侧元素在左侧的位置, 然后进行替换
 */
let arr = [...Array(100).keys()].sort(() => Math.random() - 0.5)

function insert(arr) {
  const { length } = arr
  let current

  for (let i = 0; i < length; i++) {
    current = arr[i]
    let j = i
    // 左边数组项进行比较排序, 条件是什么呢? 
    // 当然是长度, 长度怎么来 -> 取外循环的 i,
    // 内循环需要比较 j = i 轮
    while (j > 0) {
      // 左边已是顺序排列
      if (current > arr[j - 1]) break;

      // 左边不是有序, 则左移进行检查, 看看 current 在什么位置
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = current // 找到 current 左侧所在的位置
  }

  return arr
}

console.time('insert')
console.log(insert(arr))
console.timeEnd('insert') // 5.2ms
