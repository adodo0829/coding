/**
 * 冒泡排序
 * 容器内部相邻元素比较,进行位置互换, 直到比较完成
 * 第一轮比较找出最大的, 相邻两项进行比较
 * 第二轮找第二大
 * ...
 * 第 n 轮找最小的, 不用找了
 */

function bubble(arr) {
  const { length } = arr
  for (let i = 0; i < length; i++) { // 比较的轮次
    for (let j = 0; j < length - 1; j++) {
      //  相邻元素两两比较
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr
}

let arr = [...Array(100).keys()].sort(() => Math.random() - 0.5)

console.time('bubble');
console.log(bubble(arr));
console.timeEnd('bubble'); // 7.567ms

function bubbleOptimize(arr) {
  const { length } = arr
  for (let i = 0; i < length; i++) { // 比较的轮次
    for (let j = 0; j < length - i - 1; j++) {
      // 优化手段: 每一轮比较过后, 就会找到一个最大的数放到后面, 我们下次可以不用比较了
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr
}

console.time('bubbleOptimize');
console.log(bubbleOptimize(arr));
console.timeEnd('bubbleOptimize'); // 2.86ms