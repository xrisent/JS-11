// const age = 8

// switch (age) {
//  case 5:
//    console.log("Детский сад")//    break
//  case 6: //    console.log("Начальные классы")
//    break//  case 15: 
//    console.log("Старшие классы")//    break
//  default: {//    console.log("Не учтено")
//  }// }
// Напишите код, который с помощью циклов while выводит в консоль таблицу
// умножения до 5
// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 2 x 4 = 8
// 2 x 5 = 10

// 1 итерация: j = 1, i = 1
// j = 1
// let j = 1
// while (j <= 5) {
//  let i = 1
//  while (i <= 10) {
//    //             1  x   1   =    1//    //             1  x   2   =    2
//    //             1  x   3   =    3//    //             ....
//    //             1  x   10  =    10//    console.log(`${j} x ${i} = ${i * j}`)
//    i++//  }
//  j++// }

// написать цикл который будет высчитывать факториал// числа b. 
// !5 = 1 * 2 * 3 * 4 * 5 = 120
// !3 = 1 * 2 * 3 = 6
// const b = 5

// let i = 1
// let f = 1
// // 1:  i = 1, f = 1
// // 2:  i = 2, f = 1
// // 3:  i = 3, f = 2
// // 4:  i = 4, f = 6
// // 5:  i = 5, f = 24
// while (i <= b) {
//  // f = 1 * 1 = 1
//  // f = 1 * 2 = 2
//  // f = 2 * 3 = 6
//  // f = 6 * 4 = 24
//  // f = 24 * 5 = 120
//  f = f * i
//  i++
// }

// Функции
//

//Объявил функцию
//Function Declaration

// function greetings(name, surname) {
//  console.log("Hello, " + name + " " + surname)
//  console.log("How are you?")
//  console.log("How can I help you?")
// }
// // return 
// greetings("Azat", "Baisynov")
// создайте функцию которая принимает возраст
// и адрес, и выводит их в консоль

function infoWriter(age, address) {
    console.log("Ваш возраст: " + age)  
    console.log("Ваш адрес: " + address)
  }
  infoWriter(28, "Bishkek")
  infoWriter(35, "Moscow")