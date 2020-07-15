"use strict";

const {getRandomIntInterval, getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js

// Даны два целых числа A и B (A < B). Найти сумму всех целых чисел от A до B включительно.

let A = getRandomIntInterval(1, 5)
let B = getRandomIntInterval(5, 10)

let sum = 0

for(let i = A; i < B+1; i++ ){
    sum += i
}
console.log(A)
console.log(B)
console.log(sum)