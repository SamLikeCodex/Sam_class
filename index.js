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

window.onload = function () {
  console.log(document.querySelector("#year"))
  document.querySelector("#year_btn").addEventListener("click", function () {
    const year = document.querySelector("#year").value
    console.log(year)
    document.querySelector("#answer").innerHTML = year
  })
}

