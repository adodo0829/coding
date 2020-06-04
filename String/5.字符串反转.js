/**
 * 反转字符串
 * @param { string array } s 
 */
function reverseString(s) {
  if (!Array.isArray(s)) return

  const { length } = s

  for (let i = 0; i < length / 2; i++) {
    // 数组解构, 两两交换, 0和i-1位, 1和i-2位, ...
    [s[i], s[length - 1 - i]]= [s[length - 1 - i], s[i]]
  }
  console.log(s);
  return s
}

let stringArray = ['h', 'e', 'l', 'l', 'o']
reverseString(stringArray)