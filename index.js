console.log("Hello World!");

// 數字
0.5
1
// 字串
;("use strict")
;("abcdef")
// 布林值 
true
false


// 
// const name="Sam"
// let number=1
// number=2
// let temp=number
// console.log(temp);
// number=3
// temp=number
// console.log(temp);
// const只能宣告變數1次,也就是只能輸入1次。 let可以賦予多個值。
// const=宣告=初始化
// console.log的()為"方法", (內容)


// 考題:
// let a=10
// let b=20
// console.log(a, b)

// 解答:
// let a=10
// let b=20
// let c
// c=a
// a=b
// b=c
// console.log(a, b)
// 20,10


// 比較運算子 and== or!= , 邏輯運算子 and&& 至少有1為真|| 
// let a=10
// let b=20
// console.log(a==10)
// console.log(a!=10)
// console.log(a==10 && b==20)
// console.log(a==10 || b==10)
// console.log(a==10 && b>=10)

// console.log(1+1)
// console.log(1-1)
// console.log(1*1)
// console.log(1/1)
// console.log(2%3) // 2/3=0.666, 餘數=2-(0*3)=2
// console.log(1**2) //次方

// let a=10
// if(a==10) {
// console.log("a等於10")
// } else if (a==15) {
// console.log("a等於15")
// } else {
//     console.log("a不等於10或15")
// }
// 一定用if當開頭, 
// 假設 a=10,則顯示"a等於10", 否則 假設 a等於15,則顯示"a等於15", 否則 上述都不符則顯示"a不等於10或15"。


// i++為i=i+1, i--為i=i-1
// for迴圈, i=0, i<5, i++表示i每次加1, 直到i小於5為止。
// 這段程式碼會印出0到4的數字。

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log("for的迴圈結束")


// let double = function (num) {
//     // num = num || 1 // 如果沒有傳入參數，預設為1
//   return num * 2
// }
// let c = double(2, 3)
// console.log(c); // 4

// let sayMyName = function (name) {
//   console.log("My name is " + name)
// }
// sayMyName("jac")
// sayMyName("mary")
// sayMyName("ming")
// sayMyName("john")

// 考題:
// 1加到50=?

// 解答:
// let sum=0
// for (let i=0; i<=100; i++) {
//      sum +=i
// }
// console.log(sum)


// 因為js是由上到下執行的，所以如果要在網頁載入後才執行js程式碼，必須使用window.onload事件。
// 這樣可以確保在網頁元素都載入完成後再執行js程式碼。
// window.onload = function () {

// window.onload = function () {
//   console.log(document.querySelector("#year"))
//   document.querySelector("#year_btn").addEventListener("click", function () {
//     const year = parseInt(document.querySelector("#year").value)

    // 該年份為400的倍數，或者為4的倍數，但不可以是100的倍數。
    //  打出"let result+下面的if函數"，可以在"預覽網頁上"看到結果，沒打只能在網頁Dev的console看到結果。
//     let result
//     if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
//       result = "閏年"
//     } else {
//       result = "不是閏年"
//     }
//     console.log(year)
//     document.querySelector("#answer").innerHTML = result
//   })
// }

// const isTriangle = function (a, b, c) {
// //  三角形特性: 任意兩邊之和大於第三邊
// return a+b > c && a+c > b && b+c > a
// }
// console.log(isTriangle(1, 2, 3)) // false
// console.log(isTriangle(3, 4, 5)) // true


 // 身高單位:公尺, 體重單位:公斤
  // BMI公式: 體重(公斤) / 身高(公尺)的平方

    // 方法1:如下
// const countBMI = function (height, weight){
//    return weight / (height * height)
// }
// console.log(countBMI(1.75, 70)) // 22.86

// 方法2:如下
// const countBMI = function (height, weight){
//    return weight / (height * height)
// }
// let bmi = countBMI(1.75, 70)
// console.log(bmi) // 22.86
// console.log(countBMI(1.75, 70))


// 判斷大小的函式
// const whichIsBig = function (a, b) {
//   if (a > b) {
//     return a + " is bigger than " + b;
//   } else if (a < b) {
//     return b + " is bigger than " + a;
//   }
// }
// // 如果5=5不想回傳數字，而是undefined，則可以在else中return undefined。或是向上面直接不打"else return相等"。
// console.log(whichIsBig(5, 10));
// console.log(whichIsBig(5, 5))

// //習題: 成績分類:100-90=優, 89-80=甲, 79-70=乙, 69-60=丙, 59-0=丁
// const 成績評等 = function (分數) {
// if (分數 >= 90 && 分數 <= 100) {
//     return "優";
// } else if (分數>= 80 && 分數 <90) {
//     return "甲";
// } else if (分數 >=70 && 分數 <80) {
//     return "乙";
// } else if (分數 >=60 && 分數 <70) {
//     return "丙";
// } else if (分數 >=0 && 分數 <60) {
//     return "丁";
// } else {
//     return "輸入錯誤";
// }}

// let 分數 = 66;
// console.log (分數 + "分的評等是:" + 成績評等(分數))


// // 習題: 九九乘法表
// for (let i = 1; i <= 9; i++) {    
//   for (let j = 1; j <= 9; j++) {
//     console.log (i + "*" + j + "=" + (i * j));}
//     //也可以換成console.log(`${i} * ${j} = ${i * j}`);} // 使用模板字串
// console.log("----------");  
// }


// console.log("abcde".length); // 3
// console.log("abcde".substring(0, 2)); // "ab"
// console.log("abcde".toUpperCase()); // "ABC"
// console.log("abcde".toLowerCase()); // "abc"
// console.log("abcde".indexOf("b")); // 1
// console.log("abcde".replace("b", "d")); // "adc"

// //首字要大寫，後面字串保持小寫
// const word = "abcde";
// console.log(word.substring(0,1).toUpperCase() + word.substring(1).toLowerCase());
// // 或者(1,word.length)可以包含到底整個字串
// console.log(word.substring(0,1).toUpperCase() + word.substring(1,word.length).toLowerCase());
// // 或者使用 charAt、slice 方法
// console.log(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());


// // 物件陣列
// const students = [
//     {
//         name: "John",
//         age: 21,
//         sayName: function () {
//             console.log(`My name is  ${this.name}`);
//         },
//     },
//     {
//         name: "Mary",
//         age: 22,
//         sayname: function () {
//             console.log(`My name is  ${this.name}`);
//         },
//     },
// ];

// // 推薦使用 for...of 迴圈來遍歷陣列
// console.log("--- 使用 for...of ---");
// for (const student of students) {
//     // 在迴圈內，直接操作 student 物件
//     console.log(student.name); // 正確印出 "John", "Mary"
//     student.sayName();         // 正確呼叫每個學生的方法
// }


for (let i = 0; i < students.length; i++) {
    // console.log(students[i].name); // //"John", "Mary"
    console.log(students.name)
    students[i].sayName(); // "John", "Mary"
}
console.log("學生姓名:" students[i].name); // "John"

// 這是json語法的物件: 
'{"id":1,"last_name":"林","first_name":"美玲","gender":"female","phone":"0912-345-678","birthday":"1998-03-15","email":"meiling.lin@email.com"}'
// 這是轉換成js語法的物件:
const students = [
  {
    id: 1,
    last_name: "林",
    first_name: "美玲",
    gender: "female",
    phone: "0912-345-678",
    birthday: "1998-03-15",
    email: "meiling.lin@email.com",
  },
  {
    id: 2,
    last_name: "王",
    first_name: "俊傑",
    gender: "male",
    phone: "0923-456-789",
    birthday: "1997-11-22",
    email: "junjie.wang@email.com",
  },
  {
    id: 3,
    last_name: "張",
    first_name: "雅婷",
    gender: "female",
    phone: "0934-567-890",
    birthday: "1999-07-30",
    email: "yating.zhang@email.com",
  },
  {
    id: 4,
    last_name: "李",
    first_name: "建志",
    gender: "male",
    phone: "0945-678-901",
    birthday: "1998-09-05",
    email: "jianzhi.li@email.com",
  },
  {
    id: 5,
    last_name: "陳",
    first_name: "佳蓉",
    gender: "female",
    phone: "0956-789-012",
    birthday: "1997-05-18",
    email: "jiarong.chen@email.com",
  },
  {
    id: 6,
    last_name: "黃",
    first_name: "志明",
    gender: "male",
    phone: "0967-890-123",
    birthday: "1999-01-10",
    email: "zhiming.huang@email.com",
  },
  {
    id: 7,
    last_name: "吳",
    first_name: "芳瑜",
    gender: "female",
    phone: "0978-901-234",
    birthday: "1998-12-03",
    email: "fangyu.wu@email.com",
  },
  {
    id: 8,
    last_name: "劉",
    first_name: "家豪",
    gender: "male",
    phone: "0989-012-345",
    birthday: "1997-08-20",
    email: "jiahao.liu@email.com",
  },
  {
    id: 9,
    last_name: "蔡",
    first_name: "雅琪",
    gender: "female",
    phone: "0990-123-456",
    birthday: "1999-04-25",
    email: "yaqi.cai@email.com",
  },
  {
    id: 10,
    last_name: "楊",
    first_name: "志遠",
    gender: "male",
    phone: "0901-234-567",
    birthday: "1998-06-12",
    email: "zhiyuan.yang@email.com",
  },
]
const result = []
for (let i = 0; i < students.length; i++) {
  if (students[i].gender == "male") {
    result.push(students[i])
  }
  // console.log(students[i].name)
  // students[i].sayName()
}
console.log(result)
// console.log(JSON.stringify(students))

