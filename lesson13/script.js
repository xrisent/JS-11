// function filterEven(arr) {
//     const newArr = [];

//     for (let i = 0; i < arr.length; i++) { 
//         if ( arr[i] % 2 === 0 ) {
//             newArr.push(arr[i])
//         } 
//     }
//     return newArr;
// }

// console.log( filterEven([1,2,3,4,5,6]) ) // [2,4,6]

// Мутабельность, мутации

//Иммутабельный - если метод не изменяет начальное значение
// let a = "hello "
// const b = "world"
// a.concat(b)
// a.slice(2, 4)
// a.substr()
// a.substring()
// console.log(a)


// Мутабельные методы
        //   0 1 2 3 4
// const arr = [1,2,3,4,5] // [1,2,3,4,5,6]

// for (let i = 6; i < 10; i++) {
//     arr[arr.length] = i
// }
// console.log(arr[5])

// arr.push(6)

// console.log(arr)

// Примитивные типы данных
// number string boolean bigint symbol undefined null 

// Ссылочные типы данных
// const arr2 = []  // object
// console.log(typeof arr2)
// console.log(function() {})

// const f = 123

// cosnt g = @fwefwe=
// const g = [1,2,3]
// const h = g

// h[0] = 100

// console.log(g)

//Spread оператор
const arr = [5, 3, 1, 4, 8, 0]

let max = arr[0]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }
}
console.log(max)