"use strict";

const {getRandomIntInterval, getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js

// Даны три целых числа. Найти количество положительных чисел в исходном наборе.

let A = getRandomIntInterval(-10, 10)
let B = getRandomIntInterval(-10, 10)
let C = getRandomIntInterval(-10, 10)
let count = 0

if (A > 0 ) {
count = count + 1
} if (B > 0) {
    count = count + 1
} if (C > 0) {
    count = count + 1
} 
console.log(count)