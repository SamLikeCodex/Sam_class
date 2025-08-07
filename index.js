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


