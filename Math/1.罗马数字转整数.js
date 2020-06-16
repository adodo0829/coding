/**
 * 罗马数字转整数
 */

// I， V， X， L， C，  D,   M
// 1 ，5，10，50，100，500，1000

// 规则:
// 不能出现超过连续三个相同的罗马数字并且罗马数字中小的数字在大的数字的右边

// 特例规则:
// I 可以放在 V(5) 和 X(10) 的左边，来表示 4 和 9。 
// IV: 4,  IX: 9

// X 可以放在 L(50) 和 C(100) 的左边，来表示 40 和90。
// XL: 40,  XC: 90

// C 可以放在 D(500) 和 M(1000) 的左边，来表示 400 和 900
// CD: 400,   CM: 900

// 解析: 给定一个罗马数字, 我们可以把它看成一个字符串, 与约定的数字做匹配
// 就好像做词法解析的过程: (罗马数字 -> 十进制数字)的映射关系
// 输入:"MCMXCIV"
// 输出:1994

// 解题思路: 
// 1.遍历这个罗马数字串, 需要先处理特殊数字, 我们可以用一组映射关系老表示
// 2.再去遍历处理剩下的数字, 转成对应的数值, 将上述特殊数值填充
// 整个过程就是一个字符映射数值, 累加的过程

// 特殊字符
const specialRoman = {
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900
}
// 常规字符
const normalRoman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

function roman2int(romanNum) {
  let res = 0
  // 先遍历 找出特殊值进行累加, 去除特殊值
  for (const key in specialRoman) {
    if (romanNum.includes(key)) {
      // let reg = new RegExp(key)
      romanNum = romanNum.replace(key, '')
      res += specialRoman[key]
    }
  }
  console.log(romanNum, res);
  // 再遍历 对常规值进行累加
  for (const rn of romanNum) {
    res += normalRoman[rn]
  }
  console.log(res);

  return res
}

let rnum = 'MCMXCIV'
roman2int(rnum)