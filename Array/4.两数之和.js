/**
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 */

function find2num(arr, target) {
  let gap
  for (let i = 0; i < arr.length; i++) {
    gap = target - arr[i]
    for (let j = 0; j < arr.length; j++) {
      if (gap === arr[j]) {
        return [i, j]
      }
    }
  }
  return null
}

const a = [2, 7, 11, 23]
const sum = 13
console.log(find2num(a, sum))

// 声明一个临时map存储差值集合