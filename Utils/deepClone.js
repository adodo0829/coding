/**
 * 实现一个深拷贝函数
 * 分析: 什么数据才需要深度拷贝一份?
 * 基础数据类型: 都是值引用, 直接通过赋值(=)给变量就实现了值拷贝
 * 复杂数据类型: 都是地址引用, 所以我们不能通过直接赋值的形式来实现,
 *             必须开辟一个新的内存空间去存放被拷贝对象的属性值,
 *             其实复杂数据类型可以看作键值对的集合, 我们需要把这些键和值分别取出来
 */

// 下面我们实现一下
// 在实现之前, 我们要考虑一下我们深拷贝的程度要达到一个什么样的水平
// 比如是实现一个数组或者简单键值对对象的拷贝, 还是包含symbol属性对象的拷贝等, 还是包含内置对象的拷贝
// 还需要解决循环引用的问题

function getType(v) {
  return Object.prototype.toString.call(v).slice(8, -1).toLowerCase();
}
/**
 * 深拷贝一个对象: 这里只实现了symbol属性对象,数组,普通对象的拷贝
 * @param {*} obj
 */

function deepClone(data) {
  let map = new WeakMap()

  function deep(obj) {
    const objType = getType(obj);
    // 创建新的内存空间
    let result;
    if (objType === "array") {
      result = [];
    } else if (objType === "object") {
      result = {};
    } else {
      // 非对象,数组直接返回, 也可以抛出提示
      return obj;
    }

    // 递归填充上述空间
    if (objType === "array") {
      for (let i = 0; i < obj.length; i++) {
        result.push(deepClone(obj[i]));
      }
    } else if (objType === "object") {
      // symbol属性并不能被for in遍历, 所以我们需要换一个方式, 先取出key
      const keys = [
        ...Object.getOwnPropertyNames(obj),
        ...Object.getOwnPropertySymbols(obj),
      ];
      // 这里还要处理循环引用的对象, 避免递归爆栈, 一定要确定好递归终止条件

      // 最常用的方式就是用一个map对存储已经拷贝过的对象值, 每次进行判断是否重复拷贝
      // 那么此时需要维护一个map表, 如果直接在函数里声明一个map空间, 每次执行完会被回收,
      // 所以这里我们可以采用闭包来维护一个map
      if (keys.length === 0) return obj;

      if (map.has(obj)) return map.get(obj);
      console.log(111)
      map.set(obj, result); // 将result存到map里

      keys.forEach((key) => {
        let item = obj[key];
        if (getType(item) === "array" || getType(item) === "object") {
          result[key] = deep(item);
        } else {
          result[key] = item;
        }
      });
    }
    return result;
  }

  return deep(data);
}

let a = [1, 2, 3];
let b = deepClone(a);
console.log(b);
a.push(4);
console.log(a);

let a1 = [1, 2, [3, 4, 5], { ss: "cc" }];
let b1 = deepClone(a1);
console.log(b1);
a1[2] = 2;
console.log(a1);

let a2 = { 1: 22, name: "huhhua", age: 26, skills: [1, 2, 3] };
let b2 = deepClone(a2);
a2.name = "xxoo";
console.log(b2, a2);

let s = Symbol("sss");
let a3 = { [s]: "symbolvalue", name: "huhua", age: s };
let b3 = deepClone(a3);
a3[s] = "xxxxx";
console.log(b3, a3);

// 循环引用测试
let c0 = { work: "fronter" };
let c1 = { name: "huhua", job: c0 };
c0.info = c1;

let test = deepClone(c1);
console.log(test, test.job.info.name);
/**
 {
  name: 'huhua',
  job: { work: 'fronter', info: [Circular *1] }
}

huhua
 */