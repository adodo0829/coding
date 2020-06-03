# Focus On Coding With JavaScript
no matter how busy you are, keep coding with js

## 算法复杂度
算法复杂度是考评算法执行效率和消耗资源的一个重要指标,在符合算法本身的要求的基础上,编写的程序运行时间越短,运行过程中占用的内存空间越少,意味着这个算法性能越好...

当然, 这两个也是互相影响的...
#### 时间复杂度
即算法运行的时间, 转化到代码上就是每行代码运算的次数
```
o(1)  常数操作
o(n)  线性操作, 遍历数组
o(n^2) 嵌套循环, 两层遍历
o(log(n)) 循环递增数 i*2, 如下
  for (let i = 1; i <= n; i *= 2) {
    // do something
  }
n*o(s) 递归函数 o(s) * 递归调用次数n
       一些递归操作, 运算次数指数级增长, 如斐波那契数列的递归
       当然可以用尾递归优化, 将上一步的结果作为参数
```
#### 空间复杂度
算法运行过程中临时占用空间大小, 声明变量赋值后就占用了内存空间
```
o(1): 算法执行所需要的临时空间不随着某个变量的大小而变化,比如常量声明
o(n): 创建长度为 n 的数组
```

## 一些常规需要考虑的因素
- 入参检测(类型, 范围等...)
- 边界检测(极值, 中断条件等...)
- 遍历,条件判断
- 声明临时变量, 指针等

## JsAPI
- [手动实现 async + await语法糖](https://github.com/appleguardu/coding/issues/7)

## Sort
- [冒泡手写](https://github.com/appleguardu/coding/issues/4)
- [插入手写](https://github.com/appleguardu/coding/issues/5)

## String
- [查找出现最多的项](https://github.com/appleguardu/coding/issues/1)
- [整数翻转](https://github.com/appleguardu/coding/issues/2)
- [相同字符组成的异位字符串](https://github.com/appleguardu/coding/issues/3)

## Array
- [一维数组转化二维分段数组](https://github.com/appleguardu/coding/issues/6)
