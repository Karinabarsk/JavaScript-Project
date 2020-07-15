"use strict";

const {getRandomIntInterval, getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js

// Даны три целых числа. Найти количество положительных и количество отрицательных чисел в исходном наборе.

let A = getRandomIntInterval(-100, 100)
let B = getRandomIntInterval(-100, 100)
let C = getRandomIntInterval(-100, 100)

let countPlus = 0
let countMinus = 0

if (A <= 0) {
    countMinus += 1
} else {
    countPlus += 1
}

if (B <= 0) {
    countMinus += 1
} else {
    countPlus += 1
}

if (C <= 0 ) {
    countMinus += 1
} else {
    countPlus += 1
}

console.log(countPlus)
console.log(countMinus)