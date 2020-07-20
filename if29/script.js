"use strict";

const {getRandomIntInterval} = require('../utils') // Импортируем функции из файла utils.js

// Дано целое число. Вывести его строку-описание вида
//«отрицательное четное число», «нулевое число», «положительное нечетное число» и т. д.

let A = getRandomIntInterval(-10, 10)

console.log(A)

if (A < 0 && A%2 === 0) {
console.log('отрицательное четное число')
} else if (A === 0) {
console.log('нулевое число')
} else if (A>0 && A%2 !== 0){
console.log('положительное нечетное число')
} else {
console.log('это число другого вида, которого не было в задаче')
}
