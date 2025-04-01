let age = 18
// Неполное ветвление

// Полное ветвление
// if (age > 17) {
//  console.log("Hello")
//  // Вложенное ветвление
//  if (age == 18) {
//    console.log("Okay")//  }
// } else {
//  console.log("Bye")
// }
// > < >== <== == === ! 

// && ||

// Конъюнкция - Conjunction
// логическое умножение  &&
//   true     false
//    1    *    1   *     1   *    0   = 0
// if (5 > 4 && 3 < 7 && 78 > 1 && 0 > 1) {
  // console.log("TRUE")// }
// Дизъюнкция - Disjunction
// логическое сложение ||
//    1    +   0    *    0    +    1 
// if (5 > 4 || 3 < 2 && 72 < 2 || 24 > 4) {
//  console.log("TRUE")
// }

// Вам дана переменная day. В ней лежит какое то число
// из интервала 1 - 31. Необходимо определить к какой
// декаде месяца принадлежит это число
// первая вторая третья

// const day = 50
// if (day > 0) {
//  if (day <= 10) {
//    console.log("первая")//  } else if (day <= 20) {
//    console.log("вторая")//  } else if (day <= 31) {
//    console.log("третья")//  } else {
//    console.warn("Число неверное")//  }
// }

// Loop - циклы

// начальное значение
// let i = 0
// //   condition - условие
// while (i < 5) {
//  console.log("hello")
//  // шаг increment
//  i++
// }
//           0  1  2  3  4
const arr = [55,66,77,88,99]

for (let i = 4; i >= 0; i--) {
  console.log(arr[i])}