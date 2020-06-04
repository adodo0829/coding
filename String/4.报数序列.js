/**
 * 报数描述: 一个字符串序列, 下一位是对上一位序列的描述
 * 1      => 1
 * 11     => 1 个 1
 * 21     => 2 个 1
 * 1211   => 1 个 2, 2 个 1
 * 111221 => 
 * 求给定一个正整数 n（1 ≤ n ≤ 30), 输出第 n 项这个报数序列
 */

function genSequence(n) {
  if (typeof n !== 'number') return

  // 一项一项的来, 后面的项依赖于前面的项
  let end = '1'
  for (let i = 1; i < n; i++) {
    // 需要一项一项往后面推导
    // 用字符来替代前面的字符
    // (\d): 匹配一个字符
    // ‘\1’ 匹配的是所获取的第1个()匹配的引用, ’(\d)\1’ 匹配两个连续数字字符
    end = end.replace(/(\d)\1*/g, str => `${str.length}${str[0]}`)
  }
  console.log(end);
  return end
}

genSequence(1)
genSequence(2)
genSequence(3)
genSequence(4)
genSequence(5)